
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice method
console.log(arr.slice(2));
console.log(arr.slice(2,4));//printing end parameter
console.log(arr.slice(-2));// last element of an array
console.log(arr.slice(1, -2));
console.log(arr.slice());//shallow copy
console.log([...arr]);//breadth method

// Splice method - it does mutate the original array
console.log(arr.splice(2));
arr.splice(-1); //delete the last element
arr.splice(1, 2);
console.log(arr);

// Reverse - does mutate the original methods
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse());
console.log(arr2);

// Concat method - does not mutate original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join 
console.log(letters.join(' - '));

// The new at method
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at[0]);

// getting the last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

console.log('jonas'.at(0)); 
console.log('jonas'.at(-1));

// For each method in array

// let's say we wanted to move over this movement's array in order to print a message for each movement in this bank account. [Note > Positive vaues are Deposit and Negative values are Withdrawen]
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('-----For of loop-------');
// for (const movement of movements) {
// accessing counter variable
for (const [i, movement] of movements.entries()) {
    if(movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i+ 1}: You withdraw ${Math.abs(movement)}`);
    }
}

console.log('-------ForEach------');
movements.forEach(function (mov, i, arr) {
    if(mov > 0) {
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        console.log(`Movement ${i+ 1}: You withdraw ${Math.abs(mov)}`);
    }
});   

// 0: function(200)
// 1: function(450)
// 3: function(400)
// ..............


/* forEach with Maps and Sets */

console.log('---------With Map------');
const currencies = new Map([
    ['USD', 'United States of dollar'],
    ['EUR', 'Euro'],
    ['GBR', 'Pound sterling'],
]);

currencies.forEach(function(value, key, Map) {
    console.log(`${key}: ${value}`);
})

console.log('-----------With Set--------');
const currenciesUnique = new Set(['USD', 'GBP', 'JPN', 'EUR', 'INR' ]);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map){
    console.log(`${value}: ${value}`);
});