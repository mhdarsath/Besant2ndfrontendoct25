// console.log("Hello students");
// console.log(`I love javascript`);
// console.log('I love javascript');

// const { use } = require("react");

// window.alert("Hai welocome to javascript qworld");

// document.getElementById("myH1").textContent = "Welcome to javascript world";

// document.getElementById("myP1").textContent = "we are learning javascript";

// let age = 24;
// let price = 10.44;
// let grade = 5.5;
// console.log("your age is", age);
// console.log(`your are ${age} years old`);
// console.log(typeof price);
// console.log(typeof grade);

// let firstName = "hisham";
// let favFood = "Dosa";
// let email = "hisha111m@gmail.com";

// console.log(`your name is ${typeof firstName}`);
// console.log(`you like ${favFood}`);
// console.log(`your email is ${email}`);

// let online = true;
// let forSale = true;

// console.log(typeof online);
// console.log(`Hisham is ${online}`);
// console.log(`is this car is for sale ${forSale}`);

// let fullName = "Hisham Student";
// let age = 22;
// let student = true;

// document.getElementById("myH1").innerHTML = `my name is ${fullName}`;
// document.getElementById("myH2").innerHTML = `my age is ${age}`;
// document.getElementById("myH3").innerText = `i am student: ${student}`;

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 3;
// students = students % 2;
// students = students % 2;

// students += 1;
// students -= 1;
// students *= 1;
// students /= 1;
// students %= 1;

// students++;
// students--;

// // operators precidence

// paraenthis ()
// exponents

// multipliaction & division & modulos

// addition & subration

// let result = 1 + 2 * 3 + 4 ** 2;
// let result = 6 / 2 ** (2 + 5);
// 1 + 2 * 3 + 16
// 1 + 6 + 16
// 23
// console.log(result);

//  how to get the user input

// window promt

// HTML text box

// let username;

// username = window.prompt('what is your username');
// username = window.prompt('what is your username');

// let num1 = Number(window.prompt('Enter num 1'));
// let num2 = Number(window.prompt('Enter num 2'));

// let a = String(10);
// let b = String(20);

// let a = Number("10");
// let b = Number("20");

// console.log(a + b);

// console.log(num1 + num2);

// let username;

// document.getElementById("mySubmit").onclick = function() {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`
//   console.log(username);

// }

//const = a variable that cant be changed

// const PI = 3.14159;

// let radius;
// let circumference;

// pi = 34.443;

// radius = window.prompt("Enter the raius of the circle...")
// radius = Number(radius);

// circumference = 2 * pi * radius;

// console.log(circumference);

// const decreaseBtn = document.getElementById("decrease");
// const resetBtn = document.getElementById("reset");
// const increaseBtn = document.getElementById("increase");
// const countLabel = document.getElementById("countLabel")
// count = 0;

// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }

// Math = builtin object that provides a collection of propeties and methods

// console.log(Math.PI);
// console.log(Math.E); // Eulers number

// let x = 16;
// let y = 3;
// let z = 10;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(y, x);
// z = Math.sqrt(x);
// z = Math.log(x);

// let max = Math.max(x, y, z)
// let min = Math.min(x, y, z)
// console.log(max);
// console.log(min);

// if statement

// let age = 20;

// if(age >= 18) {
//     console.log("You are old enough to enter this site");

// } else {
//     console.log("You amust 18+ to enter this site");

// }

// let isStudent = true;

// if(isStudent) {
//     console.log("You are student");
// } else {
//     console.log("You are not a student");
// }

// let age = 18;

// let hasLicence = true;

// if(age >= 18) {
//     console.log("You a old eneoug to drive");

//       if(hasLicence) {
//         console.log("You have your lisense");
//       } else {
//         console.log("ypu do not have your lisence yet");
//       }

// } else {
//     console.log("You must be 18+ to have a linsece ");
// }

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const rupayBtn = document.getElementById("rupayBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function() {

//     if(myCheckbox.checked) {
//          subResult.textContent = `you are subscribed`;
//     } else {
//         subResult.textContent = `you are not subscribed`;
//     }

//     if(visaBtn.checked) {
//         paymentResult.textContent = `you are paying with visa card`;
//     }
// }

// ternary operator - a shortcut for if and else statements

// help to assign a varibale baesd on a condition

// condition ?  conIfTrue : consIfFalse;

// let age = 1;

// let message = age >= 18 ? "you are adult" : "you are minor";

// console.log(message);

// let time = 24;

// let greeting = time < 12 ? "good morning" : "good afternoon";

// console.log(greeting);

// let purchaseAmount = 100000;

// let discount = purchaseAmount >= 100 ? 10 : 0;

// console.log(`Your total is ${purchaseAmount - purchaseAmount * (discount / 100)}`);

// switches -

// let mark = 2;

// if(mark < 10) {
//     console.log("Your grade is D");
// } else if(mark >10 && mark <=50 ) {
//     console.log("Your grade is c");
// } else if(mark > 50 && mark <= 80) {
//     console.log("Your grade is b");
// } else if(mark > 80 && mark <= 100) {
//     console.log("Your grade is A");
// } else {
//     console.log("Inviad mark");
// }

// switch - can be efficient to many else if statements

// let day = 6;

// switch (day) {
//   case 1:
//     console.log("it is monday");
//     break;
//   case 2:
//     console.log("it is tuesday");
//     break;
//   case 3:
//     console.log("it is wednesday");
//     break;
//   case 4:
//     console.log("it is thursday");
//     break;
//   case 5:
//     console.log("it is friday");
//     break;
//   case 6:
//     console.log("it is saturday");
//     break;
//   case 6:
//     console.log("it is sunday");
//     break;
//   default:
//     console.log("Invaild day");
// }



// let testScore = 85;
// let letterGrade;

// switch(true) {
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//     default:
//         letterGrade = "F";

// }

// console.log(letterGrade);

// String methods - allow you to manipulate and work with text (string)


// let userName = "Ram Krish";
// console.log(userName);
//  console.log(userName.charAt(2));
//  console.log(userName.indexOf("a"));
//  console.log(userName.lastIndexOf("a"));
// console.log(userName.length);
// console.log(userName.trim());

// let result = userName.startsWith(" ");
// let result = userName.endsWith(" ");

// let result = userName.includes(" ");

// let phoneNumber = "91-99940-30296";

// phoneNumber = phoneNumber.replaceAll("-", " ")
// phoneNumber = phoneNumber.padStart(50, "0");
// phoneNumber = phoneNumber.padEnd(50, "0");

// console.log(phoneNumber);


// console.log(result);

// if(result) {
//     console.log("your username can't inculde empty space");
// } else {
//     console.log(userName);
// }


// String Slicing = creating a substring from a portion of another string

// String.slice(startTransition, end);


// const fullName = "siva kumar";

// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);


// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

// dinesh123@gmail.com


 // Method Chainin - calling one method after another in one contionoue line of code 

// no method chaining


// let username = window.prompt("Enter your username: ");

// username = username.trim();

// let letter = username.charAt(0);

// letter = letter.toUpperCase();

// let extraChars = username.slice(1);

// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;

// console.log(username);


// with method chaining

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// logical operators - used to combine or manipulate boolean values (true or false)


// AND = &&
// OR = ||
// NPT = !


const temp = 25;

// if(temp > 0 && temp <= 30) {
//     console.log("The weather is good");    
// } else {
//     console.log("the wehtaer is bad");
// }


// if(temp <= 0 || temp >= 30) {
//     console.log("The weather is bad");    
// } else {
//     console.log("the wehtaer is good");
// }


// const isSunny = true;

// if(!isSunny) {
//     console.log("it is cloudy");
// } else {
//     console.log("it is sunny");
// }


// = assigmanet opeator 
// == compare (conapare if values are equal)
// === strict equality (comapare if values & datatype are equal)
// != inequality operator
// !== strict inequaltiy operator 

// const PI = "3.14";

// if(PI == "3.14") {
//     console.log("that is PI");
// } else {
//     console.log("not pi");
// }

// if(PI === 3.14) {
//     console.log("that is PI");
// } else {
//     console.log("not pi");
// }


// if(PI !== "3.14") {
//     console.log("that is not PI");
// } else {
//     console.log("this is pi");
// }


//looping statement or control statement


// intialization - were we start 

// condition - were we stop (this will based on the condtion if the conditon is true the will cintinue if the cindition is false the loop stop)

// increase / decrease - post or pre i++ ++i i-- --i



// while loop or entry level loop
// do while or exit level loop 

// for loop

// for each loop (advanced loop )


// let username;

// while(username === "" || username === null) {
//     username = prompt(`Enter your name`);
// } 

// do {
//     username = prompt(`Enter your name`);
// } while(username === "" || username === null)

// console.log(`Hello ${username}`);

// let loggedIn = false;
// let username;
// let password;

// do{
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter your password");

//     if(username === "myUsername" && password === "myPassowrd") {
//         loggedIn = true;
//         console.log("You are loged in");    
//     } else {
//         console.log("invalid credentials please tru again");
//     }

// } while(!loggedIn);