


const deposits = movements.filter(function(mov) {
    return mov > 0;
});
console.log(movements);
console.log(deposits);


// Using for 
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// Create an array of the withdrawls
const withdrawls  = [];
for (const withd of movements) if (withd < 0) withdrawls.push(withd);
console.log(withdrawls);

const withdrawlsFor = movements.filter(mov => mov <0);
console.log(withdrawlsFor);