// An expression is a piece of code that produces a value
// For example, 3 + 4 
// Any number >>> 1999
// true && false && !false


/// And the Statement is like a bigger piece of code that is executed and which does not produce a value on itself.
// For example > a declaration is like a complete sentence and expressions are like the words that meke up the sentences.

if (23 > 10) {
    const str = '23 is bigger';
}


// JavaScript espects Statements and Expressions in different places. For example, in a template literal, we can only insert expression, but not statements. 

console.log(`I'm ${2037 - 1998} years old.`) // Correct way

/// But we cannot insert the >>
if (23 > 10) {
    const str = '23 is bigger';
}

/// to here>>>
console.log(`I'm ${2037 - 1998} years old ${if (23 > 10) {
    const str = '23 is bigger';
}}`) 

// in other way we can also instert
const me = 'Jonas';
console.log(`I'm ${2037 - 1998} years old ${me}`)