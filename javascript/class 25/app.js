<<<<<<< HEAD
// var car1 = {
//     id: "01",
//     name: "civic",
//     model: "2007",
//     color: "black",
//     price: "4000 PKR"
// }

// var car2 = {
//     id: "01",
//     name: "civic",
//     model: "2007",
//     color: "black",
//     price: "4000 PKR"
// }

// var car3 = {
//     id: "01",
//     name: "civic",
//     model: "2007",
//     color: "black",
//     price: "4000 PKR"
// }


// var car4 = {
//     id: "01",
//     name: "civic",
//     model: "2007",
//     color: "black",
//     price: "4000 PKR"
// }


function Car(id, name, model, color, price) {
    this.id = id,
    this.name = name,
    this.model = model,
    this.color = color, 
    this.price = price
}

var car1 = new Car(1, "honda", "reborn", "black", "4000 pkr")
var car2 = new Car(1, "toyota", "grande", "white", "200 pkr")

for(var key in car1){
    document.write(key + " : " + car1[key] + "<br>")
}







=======
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
>>>>>>> bb6780b9bf3dab3e6ec161d56ce2dafde456f036
