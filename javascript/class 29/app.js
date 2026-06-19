// var arr = [];

const { jsx } = require("react/jsx-runtime");

// var obj = {
//   id: "01",
//   name: "saad",
//   age: 26,
// };

// var obj2 = {
//   id: "02",
//   name: "saadia",
//   age: 260,
// };

// arr.push(obj, obj2);

// localStorage.setItem("arr", JSON.stringify(arr));

// var getData = JSON.parse(localStorage.getItem("arr"));

// for (var i = 0; i < getData.length; i++) {
//   var data = getData[i];
//   for (var key in data) {
//     document.write(key + " : " + data[key] + "<br>");
//   }
// }

var nums = [2, 23, 34, 23, 12, 324, 4, 123, 12, 342, 4345, 54, 6, 45, 3423];

var getValues = nums.filter(function(data){
    return data > 300
})

console.log(getValues)

// var allUsers = []

// var obj = {
//     email.value,
//     password.value 
// }

// localStorage.setItem('users', JSON.stringify(allUsers))

// var getAllUsers = localStorage.getItem('users', JSON.parse(data))

// var finalUser = Array.filter(function(user){
//     return user.email == inp.value  && user.pass == inp.pass 
// })

// if(finalUser){
//     alert("welcome")
// }
// else{
//     alert('go to singup')
// }


