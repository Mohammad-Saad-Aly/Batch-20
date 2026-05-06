// function foo() {
//     alert("main chala")
// }

// function getInputField(){
//     var abc = document.getElementById('username')
//     console.log(abc.value)
//     abc.value = ''
// }


var getInput1 = document.getElementById('num1')
var getInput2 = document.getElementById('num2')
var getInput3 = document.getElementById('res')


function add() {
    getInput3.value = parseInt(getInput1.value) + Number(getInput2.value)
}


function sub() {
    getInput3.value = parseInt(getInput1.value) - Number(getInput2.value)
}


function mul() {
    getInput3.value = parseInt(getInput1.value) * Number(getInput2.value)
}


function div() {
    getInput3.value = parseInt(getInput1.value) / Number(getInput2.value)
}