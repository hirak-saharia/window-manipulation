

// The Find method - retrieve one element of an array on a condition.
// Returns only first element itself not an array.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };

const accounts = [account1, account2, account3, account4];


const firstWithdrawel = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawel);

console.log(accounts);

// create a variable account
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);