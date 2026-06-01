// function bulbOn(){
//     var getBulb = document.querySelector("#bulb")
//     getBulb.src = "https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png"
// }


// function bulbOff(){
//     var getBulb = document.querySelector("#bulb")
//     getBulb.className = "abc"
//     getBulb.src = "https://image.similarpng.com/file/similarpng/very-thumbnail/2020/12/Light-bulb-on-transparent-background-PNG.png"
// }


// function onOff() {
//     var getBulb = document.getElementById("bulb")
//     if (getBulb.src == "https://image.similarpng.com/file/similarpng/very-thumbnail/2020/12/Light-bulb-on-transparent-background-PNG.png") {
//         getBulb.src = "https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png"
//     }
//     else{
//         getBulb.src = "https://image.similarpng.com/file/similarpng/very-thumbnail/2020/12/Light-bulb-on-transparent-background-PNG.png"
//     }
//     // else if(getBulb.src == "https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png"){
//     //     getBulb.src = "https://image.similarpng.com/file/similarpng/very-thumbnail/2020/12/Light-bulb-on-transparent-background-PNG.png"
//     // }
// }



// field ==> .value
// para likhney ==> .innerHTML, .innerText, .textContent
// img ==> .src

// function getParas(){
//     var getAllPara = document.querySelectorAll("p")
//     for(var i=0; i < getAllPara.length; i++){
//         getAllPara[i].style.color = "green"
//     }
// }

function getParas(){
    var getSomePara = document.getElementById("div")
    var some = getSomePara.getElementsByTagName("p")
    for(var i=0; i < some.length; i++){
        some[i].className = "abc"
    }
}