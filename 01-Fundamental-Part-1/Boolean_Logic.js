// Basic Boolean logic: The AND, OR & NOT Operators.

// Example: A. Sarah has a driver's license and B. Sarah has good vision
// >>> Boolean variables that can be either True or False


// Using the AND Operator like A AND B, we can combine these two Boolean variables.
// "Sarah has a driver's license AND good vision." 
// Result of this operation will be called as truth table

// Using the OR Operator >> "Sarah has a driver's license OR good vision."

// Using NOT Operator >> Inverts true/false 


// Example-----
// age = 16
// a. Age is greater then or equal 20 >>> false
// b. Age is less than 30 >>> true

// Let's use operators for the above scenerios:
   // !A(NOT A) is false - the result of NOT A is true 
   // A AND B - A is false and B is true = false
   // ! A AND B - NOT A AND B - NOT A is true and B is true = true
   // A OR !B(NOT B) - The values are inverted first and only then they combined using AND or OR. So, A is false and B is true , then fasle OR false = fasle


const hasDriversLicense = true; // A variable
const hasGoodVision = true; // B variable
// lets started with the AND and OR operators
console.log(hasDriversLicense && hasGoodVision);

// Let's check with OR operator
console.log(hasDriversLicense || hasGoodVision);

// Using the NOT Operator
console.log(!hasDriversLicense);

// Now lets say we want to determine whether Sarah should drive or not.
// So, let's create a new Boolean variable and use the others to determine that.

//const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive = hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive....");
// }

// Let's add another Boolean variable---
// const isTired = true; // C variable
// console.log(hasDriversLicense && hasGoodVision && isTired);

// Whether Sarah should drive or not for decision making ----with this third variable now, we want to Sarah to be able to drive- if she has a driver's license, if she has good vision and if she is not tired.........

const isTired = false; // C variable
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive....");
}


