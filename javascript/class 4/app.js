// var a = 2
// var b = 4
// var eq = --a + a-- - a++ + --b - --b - b-- + a++
// document.writeln(eq)

// var a = 3
// a += 3 || a = a + 3
// document.writeln(a)

// var a = 4
// var b = 2

// b += 10
// a -= 2

// document.writeln(a)
// document.writeln(b)

// var main; // declartion
// var main = "mirzapur" /
// / initialization

// var main;
// document.writeln(main)


// var firstName = prompt("Enter your first name", "johny")
// var lastName = prompt("Enter your last name", "gunnah")

// document.writeln(
//     "Your first name is " + firstName + "<br>" + 
//     "Your last name is " + lastName
// )


// var test = Number(prompt("Test"))
// var num1 = parseInt(prompt("Enter first value"))
// var num2 = +prompt("Enter second value")
// console.log(sub)


var num1 = +prompt("Enter first value")
var num2 = +prompt("Enter second value")

var add = num1 + num2
var sub = num1 - num2
var mul = num1 * num2
var div = num1 / num2


document.writeln(
    "The add of "+ num1 +" and "+ num2 +" is = "+ add + 
    "<br> The sub of "+ num1 +" and "+ num2 +" is = "+ sub + 
    "<br> The mul of "+ num1 +" and "+ num2 +" is = "+ mul + 
    "<br> The div of "+ num1 +" and "+ num2 +" is = "+ div.toFixed(2) 
)