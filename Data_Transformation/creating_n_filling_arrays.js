
const arr = [1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,7));

// generate arrays programatically - ArrayConstrcutor()

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);

x.fill(1, 3); // 1 > begin param and 3 > index
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// lets create an array programatically - array.from()
const y = Array.from({length: 7}, () => 1);
console.log(y);

// Create an array from 1 to 7
const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);

// Create an array with 100 random dice rolls
const dice = Array.from({length: 100}, (_, i) => i + 1);
console.log(dice);

// querySelectorAll() returns node list of an array which contains all the selected elements.

//  let's say that we do not have the movements or for application here stored in an array. So again, let's pretend that we only have these values, so all of these movements only stored here in the user interface, but we do not have them somewhere in our code. So we don't have an array containing these values. But now let's say we want to calculate their sum. And so therefore we need to somehow get them first from the user interface and then do the calculation based on that.

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

/*
labelBalance.addEventListener('click', function() {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

    console.log(movementsUI.map(element => element.textContent.replace('€', '')));
});
*/
labelBalance.addEventListener('click', function() {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'), element => Number(element.textContent.replace('€', '')));
    console.log(movementsUI);

    // console.log(movementsUI.map(element => element.textContent.replace('€', '')));
});

// We used a Array.from() to create an array from the result of the querySelectorAll() which is a NodeList, which is not really an array, but an array like structure and that array like structure can easily be converted to an array using Array.from(). And then as a second step, we even included a mapping function, which then forms that initial array to an array exactly as we want it. So basically converting the raw element to its text content and replacing the Euro sign with nothing.



// Which array method to use in each situation 