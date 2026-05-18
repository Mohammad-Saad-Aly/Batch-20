// function abc (e){
//     e.style.backgroundColor = "yellow"
// }


var getInp = document.querySelector("#user")
var getList = document.querySelector("#list")
var getBtn = document.querySelector("#btn")
getBtn.addEventListener('click', function () {

    getList.innerHTML += `<li> ${getInp.value} <button onclick='delBtn(this)'> Delete </button> <button onclick='editItem(this)'> Edit </button> </li>`

    getInp.value = ""

})

function delBtn(e) {
    e.parentNode.remove()
}

function delAll() {
    getList.innerHTML = ''
}

var currentItem;

function editItem(e){
    currentItem = e.parentNode.firstChild
    getInp.value = e.parentNode.firstChild.textContent
    document.getElementById("update").style.display = 'inline-block'
}


function updateValue(){
    // value chahye field ki
    // currentItem

    currentItem.textContent = getInp.value
    getInp.value = ''
    document.getElementById("update").style.display = "none"

}