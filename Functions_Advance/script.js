
// Deafualt Parameters

'use strict';


const bookings = [];

// Create a booking function
const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers // price dynamically calculated
    ) {

    // ES5 way
    // numPassengers = numPassengers || 1;
    // print = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH1234', 2);
createBooking('LH1234', 5);

createBooking('LH123', undefined, 1000); // to skip default parameter



// # How passing Arguments works: value vs reference
const flight = 'LH1234';
const jonas = {
    name: 'Jonas Hemming',
    passport: 24356798
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 24356798) {
        alert(checkIn);
    } else {
        alert('Wrong Passport!');
    }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is there same as doing-----
// const flightNum = flight;
// const passenger = jonas

// Interacting different functions with the same object
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);


//___________________/////////////////////////////
// First-class and higher-order functions


// Functions accepting callback functions
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');

};

// Higher order functions
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// we're calling the transformer function here and into that function we are passing the callback function.


// JS uses callback all the time
const high5 = function () {
    console.log('👋');
}
document.addEventListener('click', high5); // addEventListener is a higher order function and high5 is a lower order

// Callback function using forEach
['Jonas', 'Martha', 'Adam'].forEach(high5);


/////////// -///////////////////////

// Functions returning functions - Functional Programming
const greet = function (greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greetHey = greet('Hey');
greetHey('Jonas');
greetHey('Steven');

// Rewrite the greet function using Arrow functions
const greetArr = greeting => name => console.log(`${greeting} ${name}`)
greetArr('Hi') ('Jonas');


// ----------------------///////////////////



/// The call and apply methods ///
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function () {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
        );
        // book method to add a new object for bookings 
        this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name});
    },
};

lufthansa.book(239, 'Jonas Hemming');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

// Now lets say after some years, the Lufthansa Group created a new airline. 
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};
// now create a new function call book and set it to lufthansa.book
const book = lufthansa.book;

// book(23, 'Sarah Williams'); Does not work

// Call method
book.call(eurowings, 23,'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mery Cooper');
console.log(lufthansa);

// so now we can keep going creating a new airlines using call method
const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};
book.call(swiss, 583, 'Mery Cooper');
console.log(swiss);

// Apply method - does exact the same as Call method but it does not receive a list of arguments after the this keyword, instead its gonna take an array of the arguments. 
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // Always prefer this method
*/


////////// -----------------//////////////////////

// The bind methods - Bind also allows us to manually set this keywords for any function call. But bind does not immediately call the function instead it returns a new function where the this keyword is bound.

// book(23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
// console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schem');
bookEW23('Martha Cooper');

// With Even Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane;

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// Partial Application - in Bind methods - we can preset the parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

//////---- Challence => One function returning another function

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));



// ---------------------------------------/////////////////////////
