const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

// 1st way to implement Array
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends)

//Another way > using Array Function
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

//Actual number in this element
console.log(friends.length);

// Get the index of the last element of the array
console.log(friends[friends.length - 1]);

// Add elements/replace a name in the Peter's place
friends[2] = 'Jay';
console.log(friends);

// Note > Variables declared with const, cannot be changed.
// Only Primitive values are immutable, but an Array is not a Primitive value.
// Hence, we can always change it so we can mutate it.


// However, we cannot replace the entire Array.
// friends = ['Bob', 'Alice']; // Error: Assignment to constant variable.

// An Array can hold values with differents types all at same time >>>
const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
console.log(jonas);


// Excersie: 
// Lets say we have an array of birth years, then we want to calculate the ages for some of them
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years1 = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years1));
// Calculate the ages for the fast, the second and the last Array element.
const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);
console.log(age1, age2, age3);

// Lets end with a new Array ...so lets create an array
const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[years1.length - 1])];
console.log(ages);
