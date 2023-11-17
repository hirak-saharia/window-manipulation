// Some Useful Array methods
const friends = ['Michael', 'Steven', 'Peter']
//Push methods to add elements to the end of an array
friends.push('Jay');
console.log(friends);

// calculte the lenght and store in a variable within push 
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// add an element at beginning of the friends array using unshift methods
friends.unshift('John');
console.log(friends);

// Remove element from an Array
friends.pop(); //Last
const popped = friends.pop(); //
console.log(popped);
console.log(friends);

friends.shift(); //first element removed
console.log(friends);

// Position of an array for a certain element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // Index not in 1 >> Output : -1

// ES6 method and its called includes
// Includes > instead of returning the index of the element will simply return true if the element is in the array and false if it's not.
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

// Includes in conditional Statements
if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}