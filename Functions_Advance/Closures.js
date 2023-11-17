/* 
 closure is not a feature that we explicitly use. So we don't create closures manually, like we create a new array or a new function. So a closure simply happens automatically in certain situations, we just need to recognize those situations.
*/


const secureBooking = function () {
    let passengerCount = 0;

    return function() {
        passengerCount++; 
        console.log(`${passengerCount} passengers`);
    }
}

// Call the secureBooking ans store insidethe booker
const booker = secureBooking(); // global scope

booker(); // booker function has accessed the passengerCount variable 
booker();
booker();

// In prcise way, thanks to the CLOSURE, a function does not loose to its connection that existed at the function's birthplace.
// A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.

// In leymon way, a closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a rerference to its outer scope, which preserves the scope chain throughout time.

// A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.

console.dir(booker);

// More Closures examples --------ex-1
let f; // defined an empty variable f - outside assinged in global scope

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
};

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    };
}

g();
f();
// a variable is the inside the backback of f 

// Re-assigning f function
h();
f();

// inspect the variable environment
console.dir(f);


// Example -2 --- Timer
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);

// setTimeout(function() {
//     console.log('TIMER');
// }, 1000);


/* Coding Challenge
--- This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀

*/

(function() {
    const header = document.querySelector('h1'); // backpack function
    // const body = document.querySelector('body');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue'; // call back funtion 
    });

})();