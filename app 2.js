// for (var i = 1; i<=5; i++){
//     document.write("Hello World! <br>");
// }

// for (var i = 1; i<=10; i++) {
//     document.write(i + "<br>")
// }

// var tablenumber = +prompt("Enter your Table Number");
// var limit = +prompt("Enter Your Limit ");

// for (var i=1; i<=limit; i++){
//     document.write(`${tablenumber} x ${i} = ${i*tablenumber} <br>`);
// }

// var mobile = ["Iphone","infinix","Redmi","Realme"];

// for (var i=0; i<=3; i++){
//     document.write(mobile[i] + "<br>");
// }

// var friuts = ["Apple","Bananana","Mango","Orange"];

// for (var i=0; i<=3; i++){
//     document.write(`Element at index ${i} is ${friuts[i]} <br>`);
// }

// var stars = +prompt("Enter the initial number of stars:");

// for (var i = stars; i > 0; i--) {
//     document.write("*".repeat(i) + "<br>");
// }

// var lines = +prompt("Enter the number of lines:");
// var starsPerLine = +prompt("Enter the number of stars per line:");

// for (var i = 0; i < lines; i++) {
//     document.write("*".repeat(starsPerLine) + "<br>");
// }

// var lines = +prompt("Enter the number of lines:");

// for (var i = 1; i <= lines; i++) {
//     document.write("*".repeat(i) + "<br>");
// }

// var lines = +prompt("Enter the number of lines:");

// for (var i = lines; i > 0; i--) {
//     document.write("*".repeat(i) + "<br>");
// }


// var product = 1;

// for (var i = 1; i <= 7; i += 2) {  
//     product *= i;
// }

// document.write("Product of odd integers from 1 to 7 is:", product);

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + " is even <br>");
//     } else {
//         document.write(i + " is odd <br>");
//     }
// }

// var num = +prompt("Enter a number:");

// while (num > 0) {
//     document.write(num + "<br>");
//     num -= 0.5;  
// }

// let myarr = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// for (let i = 0; i < myarr.length; i++) {
//     for (let j = 0; j < myarr[i].length; j++) {
//         document.write(`${myarr[i][j]} <br>`)
//     }
    
// }


// let scores = [12, 45, 3, 22, 34, 50];

// let num = +prompt("Enter namber!!")

// for (let i = 0; i < (scores.indexOf(num)) + 1 ; i++) {
//     document.write(`${scores[i]} `)
// }

// let  students = ["Ali", "Sami", "Taha", "Inam"];
// let  scores = [58, 73, 89, 90];
// document.write(`
//         <table border="1" >
//         <tr>
//             <th>Student</th>
//             <th>Scores</th>
//         </tr>
//         <tr>
//             <td>${students[0]}</td>
//             <td>${scores[0]}</td>
//         </tr>
//         <tr>
//             <td>${students[1]}</td>
//             <td>${scores[1]}</td>
//         </tr>
//         <tr>
//             <td>${students[2]}</td>
//             <td>${scores[2]}</td>
//         </tr>
//         <tr>
//             <td>${students[3]}</td>
//             <td>${scores[3]}</td>
//         </tr>
//     </table>
//     `)

// for (let i = 5; i < 100; i+=5) {
//     document.write(`${i} `)
    
// }


// let myarr = [24, 53, 78, 91, 12,22,340,32,45,350]

// let num = (myarr.sort())[0]
// document.write(`Array items: ${myarr} <br>`)
// document.write(`the smallest number is ${num}`)