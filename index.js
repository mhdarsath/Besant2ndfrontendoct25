// console.log("Hello students");
// console.log(`I love javascript`);
// console.log('I love javascript');

// const { isValidElement } = require("react");

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

// const temp = 25;

// if(temp > 0 && temp <= 30) {
//     console.log("The weather is good");
// } else {
//     console.log("the wehtaer is bad");
// }

// if(temp <= 0 || temp >= 30) {
//     console.log("The weather is bad");
// } else {
//     console.lo+g("the wehtaer is good");
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

// for loop - repeat some code a limited amount of time

//      1         2     4th
// for(let i = 1; i <= 3; i++) {
//  // 3rd step

//     console.log(i);
// }

// i = 1   1
// i = 2
// i = 3
// i = 4

// for(let i = 1; i <= 20; i++) {
//     if(i == 13) {
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 20; i++) {
//     if(i == 13) {
//         break;
//     }
//     console.log(i);
// }

// fuctions - a sections reusable code
// declare code onece, use it whenever we want
// call the funtion to execute the code

// function happyBirthday() {
//     console.log("happy birthday to you");
//     console.log("happy birthday to you");
//     console.log("happy birthday dear you");
//     console.log("happy birthday dear you!!!");
// }

// function happyBirthday(username, age) {
//     console.log("happy birthday to you");
//     console.log("happy birthday to you");
//     console.log(`happy birthday dear ${username}`);
//     console.log("happy birthday dear you!!!");
//     console.log(`you are ${age} years old`);
// }

// happyBirthday("hissam", 22);
// happyBirthday("siva", 21);
// happyBirthday("kumar", 24);

// function add(x, y) {
//     let result = x + y;
//     return result;
// }

// function add(x, y) {
//     return x + y;
// }

// function isEven(number) {
// if(number % 2 === 0) {
//     return true;
// } else {
//     return false;
// }
// return number % 2 === 0 ? true : false;
// }

// console.log(add(23, 59));
// console.log(isEven(18));

// function isValidEmail(email) {

//    if(email.includes("@")) {
//       return true;
//    } else {
//     return false;
//    }
// return email.includes("@") ? true : false;

// }

// console.log(isValidEmail("hisamgmail.com"));

// vraibale scope - whare a varaibe is recognized and accessable (local vs global)

//  let x = 210;  // global

// function func1() {
//       // local
//     console.log(x);
// }
// function func2() {
//     let y = 2;   // local
//     console.log(y);
//     console.log(x);
// }

// func1();
// func2();

// let x = 5;

// function func1() {
//       // local

//       x = 2;
//     console.log(x);
// }
// function func2() {
//     let x = 2;   // local
//     // console.log(y);
//     console.log(x);
// }

// func1();

// array - a variable like structure that can store or hold more than 1 value

// let fruits = ["apple", "orange", "banana", "kiwi"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for(let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }

// fruits.sort().reverse();

// for(let fruit of fruits) {
//       console.log(fruit);
// }

// fruits.push("kiwi");
// fruits.pop("kiwi");
// fruits.unshift("grapes");
// fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("kiwi");

// console.log(numOfFruits);
// console.log(index);

// spread operator - ... allows as iterate such as an array or string to be expanded into seprate elements
//(unpack the element)

// let numbers = [1, 2, 3, 4 ,5];

// console.log(numbers);
// console.log(...numbers);

// let maximum = Math.max(...numbers)

// console.log(maximum);

// let username = "hissam student";
// console.log(username);
// console.log(...username);
// let letters = [...username].join("?");
// console.log(letters);

// let fruits = ["apple", "orange", "banana", "kiwi"];

// let viggies = ["carrot", "potatoes"];

// let foods = [...fruits, ...viggies, "eggs", "bread"];

// let newFruits = [...fruits, "grapes"]

// console.log(newFruits);
// console.log(foods);

// rest parameters = (...rest) allows a function work with a varaibel nubmer of arugments by bundling them into an array.

// function openFridge(...foods) {
//   console.log(...foods);
// }

// function getFood(...foods) {
//   return foods;
// }

// let food1 = "fried rice";
// let food2 = "dosa";
// let food3 = "idly";
// let food4 = "puri";

// openFridge(food1, food2, food3, food4);

// const foods = getFood(food1, food2, food3, food4);

// console.log(foods);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }

//   return result;
// }

// const total = sum(2, 2);

// console.log(total);

// getAverage();

// function combineString(...strings) {
//       return strings.join(" ");
// }

// const fuulName = combineString("Mr", "siva", "tamilnadu", "3");

// console.log(fuulName);

// ****
// callback - a function that is passed as an arugument to another function.


// used to handle asysychrounous operations
// read the file
// Network requests
// Interacting with database 



// hello(wait);

// function hello(callback) {
//       console.log("hello");
//       callback();
// }

// function leave() {
//  console.log("Students times up leave");
// }

// function wait() {
//       console.log("students wait");
// }

// function goodBye() {
//       console.log("Goodbye Students");
// }

// sum(displayConsole, 20, 20);

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function displayConsole(result) {
//    console.log(`the answers is ${result}`);
// }


// function displayDom(result) {
//    document.getElementById("h1").innerHTML = `The answer is ${result}`
// }


// Multiplication the numbers using callback
// Delay message - setTimeout 

// forEach() - method used to itrate over the elments of an array and apply a specified function(callback)

// array.forEach(callback);
// element, index, array are provided 


// let numbers = [1, 2, 3, 4, 5, 6];

// // numbers.forEach(double);
// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array) {
//     array[index] = element * 2; 
// }


// // triple

// function square(element, index, array) {
//       array[index] = Math.pow(element, 2);
// }

// // cubic 

// function display(element) {
//    console.log(element);
// }


// let names = ["haamid", "isham", "akmal", "arsath"];


// names.forEach(upperCase);
// names.forEach(capitalize);

// function upperCase(element, index, array) {
//     array[index] = element.toUpperCase();
// }

// lowercase 

// function capitalize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// make last leeter captilize task

// names.forEach(display);

// function display(element) {
//       console.log(element);
// }

// .map() - accepts a callback and apllies that function to each element of ana array, then return a new array.


// const numbers = [1, 2, 3, 4, 5];

// const squares =  numbers.map(square);

// console.log(squares);


// function square(element) {
//       return Math.pow(element, 2);
// }

// let names = ["haamid", "isham", "akmal", "arsath"];

// const studentsUpper = names.map(upperCase);

// console.log(studentsUpper);

// function upperCase(element) {
//     return element.toUpperCase();

// } 




// const dates = ["2024-1-10", "2025-2-23", "2026-3-30"];

// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element) {
//    const parts = element.split("-");
//    return `${parts[2]}/${parts[1]}/${parts[0]}`
// }


// filter - creates new array by filtering out elements 



// let numbers = [1, 2, 3, 4, 5, 6, 7];


// let evenNums = numbers.filter(isEven);

// console.log(evenNums);

// function isEven(element) {
//   return element % 2 === 0;
// }


//  let ages = [17, 23, 12, 10, 34, 56, 70];


// const seniorCitzen = ages.filter(isSeniorCitzen);

// console.log(seniorCitzen);


//  function isSeniorCitzen(element) {
//      return element >= 50;
//  }

// let names = ["haamidaslam", "isham", "akmal", "arsathkumar", "siva"];

// const shortWords = names.filter(getShortWords);

// console.log(shortWords);

// function getShortWords(element) {
//     return element.length <= 6;
// }



// reduce - reduce the elemnet of an array to single value 


// const prices = [20, 40, 50, 5, 10];

// const total = prices.reduce(sum);

// console.log(total.toFixed(2));

// //              previousEle, next
// function sum(previousEle, next) {
//      return previousEle + next;
// }


// const grades = [75, 80, 50, 90, 98, 95];

// const maximum = grades.reduce(getMax);

// console.log(maximum);


// function getMax(acc, ele) {
//    return Math.max(acc, ele);
// }