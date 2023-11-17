
// Type conversion: When we manually convert from one type to another.

// Type Coersion: When JavaScript automatically converts types behind the scenes for us.

// Example of type conversion: Let's say we have an input field on a web page for the user to input their birth year. And these inputs from input field usually come as strings. 

// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number('Jonas')); //We get Nan whenever an operation involving numbers fails to give us a new number.
console.log(typeof NaN);

console.log(String(23));

// Type coercion: Whenever an operator is dealing with two values that have different type. In this case, JavaScript convert one of the values to match the other value in back end. So, in the end, the operation can be executed.

console.log('I am ' + 23 + ' years old'); // here the plus operator that used here triggers a coercion to strings.
console.log('23' - '10' - 3);
console.log('23' * '2');

// Game: Guess the number
let n = '1' + 1; //'11'
n = n - 1;
console.log(n);

