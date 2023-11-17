/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');

let firstName = 'Bob';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Analyst';
// OR
let job1 = 'Programmer';
let job2 = 'Analyst';

console.log(myFirstJob);
*/

// Boolean
// Declare a new variable javascriptIsFun and assigned with the true value
/*
let javascriptIsFun = true; 
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// Dynamic typing
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// Dynamic typing: Using a Box analogy, initially putting a book in a box and then later taking the book out of the box and instead putting a phone in a box. So, we changed the content of the box. We changed from true to > string of Yes.

// undefined value - Whenever we define an empty variable, the value of the variable will be undefined, enter type of variable is also undefined.
let year;
console.log(year);
console.log(typeof year);

// reassinged the variable
year = 1991;
console.log(typeof year);

// A buck or an error in JavaScript
console.log(typeof null)  
*/

// Three ways to declare a variable >> let, const, & var(old way)

// let > when we need to mutate a variable, that's the perfect use case for using let.
/*
let age = 30;
age = 31;

// const >> to declare variables that are not supposed to change at any point in the future.
const birthYear = 1991;
birthYear = 1990;
// We get a type error - It creates a variable that we cannot reassign.

// var >> is basically the old way of defining variables, prior to ES6. 
var job = 'programmer';
job = 'teacher'

*/

// Arithmetic Operator

// Calculate ages based on a persons birth year using minus operator

// const ageJonas = 2037 - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);

// Since the 2037 repeated twice which is not good, so we use a variable call now to solve the issue
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

// Cocatenate of String
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

// Using template string for better use

// // Assignment Operator
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *=4; // x = x * 4 = 100
// x++; // x = x +1
// x--;
// console.log(x);

// Comparison Operator
console.log(ageJonas > ageSarah);
// Result : True
console.log(ageSarah >= 18);

const isFullAge = ageSarah >=18;

console.log(now - 1991 > now - 2018);


let x, y;
x = y = 25-10-5; //left to right operation, so output is : 10 10 or x = y = 10, x = 10
console.log(x,y);

// grouping - Precedence
const averageAge = (ageJonas + ageSarah) /2
console.log(ageJonas, ageSarah, averageAge);
