// The Conditional operator allows us to write something similar to an if/else statement but all in one line.

const age = 23;
age >= 18 ? console.log('I would like to drink wine 🍷') :
console.log('I like to drink water 💧');

// So, that's essentially writing an if/else statement all in one line. But instead of using a statement, we use this conditional operator. And the conditional operator is also called the Ternary Operator. Because it has three parts unlike the other operators. 
// So here -- condition part : const age = 23;
// If part: age >= 18 ? console.log('I would like to drink wine 🍷') : 
// Else part: console.log('I like to drink water 💧');


// We use to check the above condition in an alternative way also which is very useful to regular use ---
const age1 = 23;
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);


// Normal checking the above condition using if else condtion
let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

// Since the Ternary Operator is really an expression, we can now use it, for example, in a template literal. 

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

// Note: The Ternary Operator is perfect when we just need to take a quick decsion.