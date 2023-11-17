
// Converting and Checking Numbers > Important
// Math and Rounding
// The Remainder Operator > Important
// Working with BigInt
// Creating Dates  > Important
// Adding Dates to 'Bankist' App
// Operations with Dates
// Internationalizing Dates(Intl)
// Internationalizing Numbers(Intl)
// Timers: setTimeOut and setInterval > Important 


console.log('------------Coverting and Checking Numbers----------')
console.log(23 === 23.0); //

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
console.log(+'23'); /// Cleaner code

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseFloat('2.5rem')); // READ A VALUE OUT OF THE STRING
console.log(Number.parseInt('2.5rem'));


// Number namespace - isNan - Check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // TRUE
console.log(Number.isNaN(23 / 0)); // False or Infinity

// Better method isFinite -- best way to checking is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false


// Rounding Numbers
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);// area of a circle with this radius 10px

// Math function with random
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1 + min); // 0...1 -> 0...(max -min) -> min...max
console.log(randomInt(10,20));

// Rounding Integers
console.log(Math.round(23.9));

console.log(Math.trunc(23.3));

console.log(Math.ceil(23.3));

console.log(Math.floor(23.9));
console.log(Math.floor('23.9'));


// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); // converted string to a number

// Remainder Operator
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

// Check a certain number is even or odd
console.log(6 % 2);
console.log(6 / 2);

// even numner
console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));


// Let's paint color on all the row movements when clicked on the Current Balance

labelBalance.addEventListener('click', function() {
    [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if(i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if(i % 3 === 0) row.style.backgroundColor = 'blue';
    });
});
// Nth time remainder works


// Numeric Seperator
//The diamter of solar system
// 287,460,000,000
const diamter = 287_460_000_000;
console.log(diamter);

const price = 345_99;
console.log(price);

const transferFee = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI);

console.log(Number('230000'));
console.log(Number('230_000')); // it wont work


// BigInt - TO LARGE NUMBER
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1); // NOT ACCURATE

console.log(47585656987659264498980211121n);
console.log(BigInt(475856569));

// Operations
console.log(10000n + 10000n);
console.log(967823489494482320356583836658473647584n * 10000000n);

const huge = 2228474776658464474748n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions in logical operator
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n);
console.log(20n == 20); // true

console.log(huge + ' is REALLY big!!!');


// Divisions
console.log(11n / 3n);
console.log(10 / 3);


// Creating Date - Date and Time
    // Create a date first
const now = new Date();
console.log(now);

console.log(new Date('Sep 02 2023 21:09:27'));
console.log(new Date('December 24, 2023'));
// console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142237185000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

// Date Calculation
const future2 = new Date(2037, 10, 19, 15, 23, 5);
console.log(+future2);

const calcdaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60  * 60 * 24);

const days1 = calcdaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

/* And now let's actually use this function to format and display or dates in a little bit nicer way here in the Bankist application. So basically, if one movement happened today, then here instead of the current date, I want to display today, then if it happened yesterday, I want to write yesterday. And then if it happened, like a couple of days ago, then I want this to say, like two days ago or five days ago, instead of the date. */



// Internationalizing Dates(intl)
    // In our application, we have two dates > one is in Current balance section and another with movements. 
    // So lets make the dates Internationalizing format on > Create date and time 

// Experimenting API 
const now1 = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  // weekday: 'long',
};
// const locale =  navigator.language;
// console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now); //http://www.lingoes.net/en/translator/langcode.htm




// Format regular numbers
const num1 = 3884764.23;

const options2 = {
    // style: "unit",
    style: 'currency',
    // unit: 'mile-per-hour',
    unit: 'celsius',
    currency: 'inr',
    // useGrouping: false,
};


console.log('US:   ', new Intl.NumberFormat('en-US', options2).format(num1));
console.log('India:   ', new Intl.NumberFormat('hi-IN', options2).format(num1));
console.log(
    navigator.language, new Intl.NumberFormat(navigator.language, options2).format(num1));



/*

// Timers - SETTiMEOUT AND setinterval
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`), 
3000,
...ingredients
);

console.log('Waiting...'); // Asyncronus JavaScript

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer); */

// Implement timer to simulate the approval of a loan. 

// // SetTimeout
// setInterval(function() {
//     const now = new Date();
//     console.log(now);

// }, 1000);


