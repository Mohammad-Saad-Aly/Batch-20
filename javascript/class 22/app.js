// function checkFunc(e){
//     e.className = "main"
// }


// function readValue(){
//     var getInput = document.querySelector("#inp")
//     console.log(getInput.value)
// }


// function setValue(){
//     var getInput = document.querySelector("#inp")
//     var text = prompt("Enter any value")
//     getInput.value = text
// }

// function fillCity() {
//     var cityName;
//     var zipEntered = document.getElementById("zip").value;
//     switch (zipEntered) {
//         case "60608":
//             cityName = "Chicago";
//             break;
//         case "68114":
//             cityName = "Omaha";
//             break;
//         case "53212":
//             cityName = "Milwaukee";
//     }
//     document.getElementById("city").value = cityName;

// }


function setPara(){
    var text = "Slow lorises are a group of several species of strepsirrhine primates which make up the genusNycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive colorationpatterns that are species-dependent. The hands and feet of slow lorises have several adaptationsthat give them a pincer-like grip and enable them to grasp branches for long periods of time. Slowlorises have a toxic bite, a rare trait among mammals."


    var getPara = document.getElementById("para")

    getPara.innerHTML += text

    document.getElementById('anc').style.display = 'none'


}


















