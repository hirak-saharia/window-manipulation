const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]; // this is basically a data sctructure which combines mutiple values that all belong to the Jonas entity.
// In arrays there is no way of giving these elements a name. And so we cant reference them by name, but only by their order number in which they appear in the array.
// To solve this problem, we have another data sctructure in JavaScript, which is Objects.
// In Objects, we actually define key value pairs, and then we can give each of these values here, a name. 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    girfriend: 'Not borned'
};

// How to retrieve data from Objects and how to change data in Objects.
// Using Dot. vs Bracket Notation
console.log(jonas);

// Dot Notation:
console.log(jonas.lastName);
// Bracket Notation
console.log(jonas['lastName']);

// Store firstName and LastName inside of a variable
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// But it cannot work with Dot notation
// console.log(jonas.'last' + nameKey);

// Another example
const interestedIn = prompt('What do you want to know about Jonas ? Choose between firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]);
// lets print when a property desnot exist utilizing undefined 
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong requst! Choose between firstName, lastName, age, job, and friends')
}
// Now, how to both Dot and Bracket notations in an element to add new properties to the object
jonas.location = 'India';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

/* Challeng:
Jonas has 3 friends, and his best friend is called Michael. So write this sentense without hardcoding any of these values. 
 */ 

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);