const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];
// for loop to loop through this array.
// Lets say we wanted to individually log every element of the array to the console.
// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does not exist

for(let i = 0; i<jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    //types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

// Having an array of birth years and calculate the ages for all these four birth years. And store them in a new array.
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]); //calculated ages one by one
}
console.log(ages);




// Continue and Break Statemeent

console.log('---Only String Printing---')
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

// Break does is to completemly terminate the whole loop. So not just the current Iteration.
// Now, log no other elements after we found a number.
console.log('----BREAK WITH NUMBER-----')
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}
