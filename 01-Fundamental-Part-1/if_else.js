/* If-else control structure
if (condition = true/false) {
    block will be executed if the condition is true

} else {

} */


// const age = 19;
// const isOldEnough = age >=18;

// if(isOldEnough) {
//     console.log('Sarah can start driving license 🚕');

// }

//or we can directly put the line : const isOldEnough = age >=18; inside the if statement

// const age = 19;

// if (age >= 18) {
//     console.log('Sarah can start driving licnese 🚑');

// }

//using else block and template literals

const age = 15;

if (age >=18) {
    console.log('Sarah can start driving license 🚗');

} else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :`);
}

// Another example : let's create a variable conditionally not just use the console.log.

// create a birth year variable.
// Create a varible call 'century' which will basically contain the century in which this person was born. Suppose, if a person was born in 2015, then it would be the 21st century.
const birthYear = 1998;

let century;  // define century outside and simply leave it empty.
if (birthYear <= 2000){
    century = 20;  // conditionally reassigned
} else {
    century = 21; // conditionally reassigned
}
console.log(century);


