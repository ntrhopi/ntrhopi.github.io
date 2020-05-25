// const fetch = require("node-fetch");
function myfunc() {
    const APIKEY = "9261219a33982282e94fdadb75949d4d"
    const baseurl = '//api.themoviedb.org/3/'
    const configurl = baseurl.concat("configuration?api_key=", APIKEY)
    var config
    var moviesearch = "search/movie";
    var moviename = document.querySelector('.moviename').value;
    var url = "".concat(baseurl, moviesearch, "?api_key=", APIKEY, "&query=", moviename);
    console.log(url)
    fetch(configurl)
        .then((res) => res.json())
        .then((data) => {
            config = data
            console.log(config)
            // document.querySelector('#moviename').textContent = moviename.toUpperCase()
            imgurl()
        })
        .catch((error) => console.log(error))

    function imgurl() {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                j = 0
                for (i = 0; i < data.results.length; i++) {
                    if (data.results[i].popularity > data.results[j].popularity)
                        j = i
                    console.log(data.results[i])
                }
                u = "".concat(config.images.base_url, config.images.backdrop_sizes[2], data.results[j].backdrop_path)
                console.log(u)
                var image = new Image()
                image.src = u
                image.onload = () => {
                    document.querySelector('#background-image').style.background = "radial-gradient(circle at center, rgba(150,150,150,0.1), rgba(0,0,0,1) 80%), url('" + u + "') no-repeat center center fixed"
                }
            })
            .catch((error) => console.log(error))
    }
}
