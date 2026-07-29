fetch(`https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=b42b039b2effc5cc14dcf5c51b446720`)
.then(data => data.json())
.then(data => console.log(data))
.catch(err => console.log(err))