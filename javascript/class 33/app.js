// promise in js 
// wada in js 

// pending
// resolve
// reject 

// let food = new Promise((resolve, reject) => {
//     let zinger = false
//     if (zinger) {
//         resolve("zinger mil gaya")
//     }
//     else {
//         reject("Zinger nai mila")
//     }
// })

// .then(data => console.log(data))
// .catch(err => console.log(err))


let getUsers = document.querySelector("#users")

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(data => data.json())
    .then((data) => {
        data.map((value) => {

            let { street, suite, city, zipcode } = value.address

            getUsers.innerHTML += `<div id="child"> 
            <p> ${value.id} </p>
            <p> ${value.name} </p>
            <p> ${value.email} </p>
            <p> ${value.username} </p>
            <p> ${street} </p>
            <p> ${suite} </p>
            <p> ${city} </p>
            <p> ${zipcode} </p>
            </div>`

            // let address = value.address
            // for(let key in address){
            //     getUsers.innerHTML += `<p> ${address[key]} </p>`
            // }

        })
    })
    .catch(err => console.log(err))