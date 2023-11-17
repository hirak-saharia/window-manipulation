
// Boil down all the elements in an array to one single value.

console.log(movements);

// accumulator -> SNOWBALL
const balance = movements.reduce(function(acc, curr, i, arr){
    console.log(`Iteration ${i}: ${acc}`);
    return acc + curr
}, 0);
console.log(balance);

// with a for loop
let balance2 = 0;
for (const mov of movements) balance2 +=mov;
console.log(balance2);

// using an arrow function
const balance3 = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance3);

// Get the maximum value of the movements array
const max = movements.reduce((acc,mov) => {
    if (acc > mov)
        return acc;
    else
        return mov;
}, movements[0])
console.log(max);