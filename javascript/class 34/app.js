let getDiv = document.querySelector("#news")
let getSearch = document.querySelector("#search")


let news = () => {

    getDiv.innerHTML = ''

    fetch(`https://newsapi.org/v2/everything?q=${getSearch.value}&from=2026-06-15&sortBy=publishedAt&apiKey=c7e2ae91f23749758991d2692e467bc9`)
        .then(data => data.json())
        .then(data => {
            let newsArticles = data.articles

            newsArticles.map(value => {
                getDiv.innerHTML += `<div id='child'> 
        <img src=${value.urlToImage} />
            <p> ${value.source.name} </p>
            <p> ${value.title} </p>
            <p> ${value.description} </p>
            <p> ${value.content} </p>
        </div>`
            })

        })
}
