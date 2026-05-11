// var num = 15

// switch (num) {
//     case 5:
//         console.log("value is 5")
//         break
//     case 4:
//         console.log('value is 4')
//         break
//     case 3:
//         console.log('value is 3')
//         break
//     case 2:
//         console.log('value is 2')
//         break
//     default:
//         console.log("not found")
// }

// var name = prompt("Enter any name")

// switch (name) {
//     case "Saad":
//         console.log("Welcome Super Admin")
//         break
//     case "Rehman":
//         console.log("Welcome Admin")
//         break
//     default:
//         console.log("You are user .......")
// }


var colorName = prompt("Enter any color name")

var getImage = document.getElementById("img")

switch (colorName) {
    case colorName:
        document.body.style.backgroundColor = colorName
        break
    default:
        getImage.innerHTML = "hello"
}



// switch (colorName) {
//     case "yellow":
//         document.body.style.backgroundColor = "yellow"
//         break
//     case "black":
//         document.body.style.backgroundColor = "black"
//         break
//     case "pink":
//         document.body.style.backgroundColor = "pink"
//         break
//     default:
//         document.body.style.backgroundColor = colorName
// }