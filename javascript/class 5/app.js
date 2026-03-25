// var num = +prompt("enter any number")
// if(num === 10){
//     console.log('true')
// }
// else{
//     console.log('false')
// }


// var myNum = 5
// var yourNum = +prompt("Enter your number")

// if (yourNum == myNum) {
//     console.log('correct')
// }
// else if(yourNum < 1 || yourNum > 10){
//     console.log('range is between 1 to 10')
// }
// else if (yourNum == 6 || yourNum == 4) {
//     console.log('kareeb kareeb')
// }
// else {
//     console.log('nikal')
// }

var studName = prompt("Enter your name")

var maths = +prompt("Enter maths number")
var isl = +prompt("Enter islamiat number")
var urdu = +prompt("Enter urdu number")
var eng = +prompt("Enter english number")
var fsx = +prompt("Enter fsx number")

var obtainedMarks = maths + isl + urdu + eng + fsx
var total = 500

var percentage = (obtainedMarks / total) * 100
var grade;

if (percentage > 100) {
    console.log('invalid percentage')
}
else if (percentage >= 80) {
    grade = "A+"
}
else if (percentage >= 70) {
    grade = 'A'
}
else if (percentage >= 60) {
    grade = 'B'
}
else if (percentage >= 50) {
    grade = 'C'
}
else if (percentage >= 40) {
    grade = 'D'
}
else {
    grade = "F"
}

document.writeln(
    `
    <table border='' width='60%' align='center'>
        <tr> 
            <th> NAME </th>
            <th> MATHS </th>
            <th> ISLAM </th>
            <th> URDU </th>
            <th> ENG </th>
            <th> PHYSICS </th>
            <th> OBT MARKS </th>
            <th> PERC </th>
            <th> GRADE </th>
        </tr>

        <tr>
            <td> ${studName} </td>
            <td> ${maths} </td>
            <td> ${isl} </td>
            <td> ${urdu} </td>
            <td> ${eng} </td>
            <td> ${fsx} </td>
            <td> ${obtainedMarks} / ${total} </td>
            <td> ${percentage.toFixed(2)} </td>
            <td> ${grade} </td>
        </tr>

    </table>
    `
)














