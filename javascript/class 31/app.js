// iterator and for of loop

// for
// while
// do while
// for in
// filter
// for of

// for(var value of arr){
//     console.log(value)
// }

// let x = arr[Symbol.iterator]()

// console.log(x.next())
// console.log(x.next())

// x.next()

// console.log(x.next())
// console.log(x.next())

// console.log("welcome user 1")

// setTimeout(()=>{
//     console.log("welcome user 2")
// }, 2000)

// console.log("welcome user 3")

let arr = [10, 20, 30, 40, 50];

let a = arr.map((value, index) => {
  return value * 2;
});

console.log(a);
