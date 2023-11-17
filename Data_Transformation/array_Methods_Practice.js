
// Array Methods Practice
/*Calculate how much has been deposited in total in the Bank*/

// Ex-1
const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, curr) => sum + curr, 0) ;


console.log(bankDepositSum);

// Ex-2 => Count how many deposits there have been in the bank with at least $1000.
//---Way-1
const numDeposits1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov > 1000).length;
console.log(numDeposits1000);

// USING Reduce method
// const numDeposits1000S = accounts.flatMap(acc => acc.movements).reduce((count, curr) => (curr >= 1000 ? count + 1: count), 0);
const numDeposits1000S = accounts.flatMap(acc => acc.movements).reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

// console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000));
console.log(numDeposits1000S);

// Prefixed + Operator
let a  = 10;
console.log(a++)
console.log(++a)
console.log(a)


// Ex - 3 => Advanced case using reduce method
    // Create a new object instead of just a number or just a string which contains sumofDeposits and of the withdrawels.
const { deposits, withdrawels } = accounts.flatMap(acc => acc.movements).reduce((sums, curr) => {
    // curr > 0 ? (sums.deposits += curr) : (sums.withdrawels += curr);
    sums[curr > 0 ? 'deposits' : 'withdrawels'] += curr;
    return sums; // return the accumulator explicitely as we have {} for the reduce method
    },
    { deposits: 0, withdrawels: 0} // objects of sums

);
console.log(deposits, withdrawels);


// Ex - 4 => Create a simple function to convert any string to a title case.
 // [Total: Title case means that all the words in a sentence are capitalized except for some of them.]
  // example: this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);
    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

    const titleCase = title
        .toLowerCase().split(' ')
        .map(word => (exceptions.includes(word) ? word: capitalize(word)))
        .join(' ');
    // return titleCase;
    return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


///////////////////////////////////////
// Coding Challenge #2

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little. Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite. Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];


GOOD LUCK 😀
*/

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];

// 1-Sol:
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2 - Sol:
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much': 'little'}`);

// 3 - sol:
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners)
    // .flat();

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);


// 4 - Sol:
 // "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. sol:
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6. sol:
 // current > (recommended * 0.90) && current < (recommended * 1.10)
// console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1));
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7. Sol:
console.log(dogs.filter(checkEatingOkay));

// 8. sol:
const dogsSorted = dogs.slice().sort((a, b) => a.recFood -b.recFood);
console.log(dogsSorted);