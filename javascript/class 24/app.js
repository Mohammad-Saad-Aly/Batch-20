// document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].innerHTML = "hello smit"


// var getDiv = document.getElementById("div")
// console.log(getDiv.childNodes)

// hasAttribue()
// getAttribue()
// setAttribue()


function check(){
    var getInp = document.getElementsByTagName("input")
    // console.log(getInp[0].hasAttribute("id"))
    // console.log(getInp[0].getAttribute("id"))
    console.log(getInp[0].setAttribute("onclick", "form()"))
}