// A function to calculate an age based on a given birty year.

// Function declaration
function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    return 2037 - birthYear;
}

const age1 = calcAge1(1990);
console.log(age1)

// Function Expression:
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1990);

console.log(age1, age2);

// Note: Function is not a type, its a value. And so if its a value, we can store it in a variable. 

// Big difference between function declaration and function expression:
    // We can actually call function declarations before they are defined in the code. 
