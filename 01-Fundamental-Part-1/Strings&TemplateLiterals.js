

const firstName = "Hirak";
const job = "Developer";
const birthYear = 1991;
const year = 2037;

const hirak = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(hirak);

// We can implement this complex string by using ES6 in a better way, which called Template Literals.
// In template literals, we can write a string in a normal way, then basically insert the variables directly into the string and they will simply be replaced. So, it can assemple multiple pieces into one final string. 

// for example: a symple calls backticks(``) need to be use for template literal.

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// We can also use backticks to write all strings, where we donot insert any of these kind of placeholder here like this > ${firstName}. 
// lets say:
console.log(`Just a regular string.....`);

// Now, another great use case of template literals is to create multiple strings. 
console.log('String With \n\
multiple \n\
lines');

// In easy way using backticks----
console.log(`String
multiple
lines`);