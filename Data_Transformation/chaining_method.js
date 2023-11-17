
const eurToUsd1 = 1.1;
console.log(movements)
// 3 data transformation all in one go
// Pipeline
const totalDepositsUSD = movements
   .filter(mov => mov > 0) //positive momement
   .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd1
   })
   
   // .map(mov => mov * eurToUsd1)
   .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);


// We should not use overuse chaining, so should try to optimize it because chaining tons of methods one after the other can cause real performance issues.

// It is a bad practice in JavaScript to Chain methods that mutate the underlying original array. And example of that is the Splice method.