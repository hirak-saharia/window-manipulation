const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; // this movement are in EURO and we wanted to convert them to US dollars

const eurToUsd = 1.1;

const movementUSD = movements.map(function(mov){
    return mov * eurToUsd;
});
console.log(movements);
console.log(movementUSD);
// Map method returns a new array with the new elements.

// let's create another mov - without using Map
const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
console.log(movementUSDfor);

// Using Arrow function instead of CallBack function 
const movementUSDwithArrow = movements.map(mov => mov * eurToUsd);


// map method loop again with string 
/*
const movementsDescription = movements.map((mov, i, arr) => {
    if (mov > 0) {
        return (`Movement ${i + 1}: You deposited ${mov}`);
    } else {
        return (`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
    }
});
console.log(movementsDescription);
*/
// without return keyword 
const movementsDescription = movements.map((mov, i) => 
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescription);