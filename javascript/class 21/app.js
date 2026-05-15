// function abc (e){
//     e.style.backgroundColor = "yellow"
// }


var getList = document.querySelector("#list")
var getBtn = document.querySelector("#btn")
getBtn.addEventListener('click', function(){
    var getInp = document.querySelector("#user")

    getList.innerHTML += `<li> ${getInp.value} <button onclick='delBtn(this)'> Delete </button> </li>`

    getInp.value = ""

})

function delBtn(e){
    e.parentNode.remove()
}

function delAll(){
    getList.innerHTML = ''
}
