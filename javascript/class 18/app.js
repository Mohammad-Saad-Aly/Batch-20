var getInputField = document.getElementById('calc')

function btnClick(btn) {
    getInputField.value += btn
}

function equalsTo(){
   getInputField.value = eval(getInputField.value)
}

function rajput(){
    getInputField.value = getInputField.value.slice(0, -1)
}

function clrAll(){
    getInputField.value = ''
}