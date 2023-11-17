// Lets check if two values are actually equal, istead of one being greater or less than the other. 

const age = 18;
if (age === 18) console.log('You just become an adult: (strict)');

// Triple equal === is called the strict equality operator. Its strict because it does not perform type coercion. So it only returns true when both values are exactly the same. 

// On the other hand, there's also the loose equality operator, which is only two equals, and the loose equalty operator actually does type coercion. 

if (age == 18) console.log('You just became an adult: (loose)')

// Note: Always avoid using loose operator as a general rule for clean code. When comparing values, always use strict equality with the three equal signs.



// Getting a value from any webpage, using the prompt function. 

/*const favourite = prompt("What's your favourite number?");

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23
    console.log('Cool! 23 is an amezing number!');
}
*/
// We use double equal here, which is the loose equality operator and this one will do tyoe coercion. 

// Lets use else if block

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
    console.log('Cool! 23 is amezing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7')
}
// Operator for different
if(favourite !== 23) console.log('Why not 23?');