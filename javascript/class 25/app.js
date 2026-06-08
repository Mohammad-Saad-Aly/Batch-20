// var student = {
//   id: 1,
//   st_name: "Maaz",
//   st_age: 17,
//   st_ins: "smit",
//   st_act: ["swimming", "cricket", "programming", "bachi"]
// };

// for(var i =0; i < student.st_act.length; i++){
//     document.write(student.st_act[i] + "<br>")
// }

// document.write(student.st_age + "<br>")
// document.write(student['id'])

// var obj = {
//     id: 1,
//     name: "Saad",
//     bool: true,
//     foo: function(){
//         alert("welcome SMIT")
//     },
//     obj2 : {
//         id2: "02",
//         name2: "Ali"
//     }
// }

// document.write(obj.obj2.name2)

// obj.foo()

var abc = {
  id: "01",
  name: "smit",
  age: "1999",
  arr: ["a", "b", "c"],
};

for (var key in abc) {

    if(key == "arr"){
        for(var i = 0; i < abc.arr.length; i++){
            document.write(abc.arr[i] + " ")
        }
    }
    else{
        document.write(abc[key] + "<br>");
    }
}
