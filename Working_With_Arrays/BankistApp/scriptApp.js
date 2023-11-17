'use strict'

// Data
  const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
      '2019-11-01T13:15:33.178Z',
      '2019-12-23T07:48:16.383Z',
      '2019-01-28T09:15:33.904Z',
      '2020-04-28T10:15:33.185Z',
      '2020-05-01T14:15:33.604Z',
      '2023-08-25T17:15:33.194Z',
      '2023-08-28T23:15:33.929Z',
      '2023-09-01T10:15:33.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT'
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
      '2019-11-01T13:15:33.035Z',
      '2019-11-30T09:48:16.867Z',
      '2019-12-25T13:04:23.907Z',
      '2020-01-25T13:18:46.235Z',
      '2020-02-05T13:33:06.386Z',
      '2020-04-10T13:43:26.374Z',
      '2020-06-25T13:49:59.371Z',
      '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US'
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };

  const accounts = [account1, account2, account3, account4];
  
  // Elements
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');
  
  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');
  
  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');
  
  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');



/////////////////////////////////////////////////Functions///////////////
  const formatMovementDate = function(date, locale) {
    const calcdaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60  * 60 * 24));

    const daysPassed = calcdaysPassed(new Date(), date);
    console.log(daysPassed);

    if (daysPassed === 0) return 'Today';
    if (daysPassed === 1) return 'Yesterday';
    if (daysPassed <= 7) return  `${daysPassed} days ago`;
    // else {
    //   const day = `${date.getDate()}`.padStart(2, 0);
    //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
    //   const year = date.getFullYear();
    //   return`${day}/${month}/${year}`;
    // }
    return new Intl.DateTimeFormat(locale).format(date);

  };

  const formatCur = function(value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(value);
  };

  const displayMovements = function(acc, sort = false) {
    containerMovements.innerHTML = '';

    const movsSort = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movsSort.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const date = new Date(acc.movementsDates[i]);
        const displayDate = formatMovementDate(date, acc.locale);

        const formattedMov = formatCur(mov, acc.locale, acc.currency);
        
        // new Intl.NumberFormat(acc.locale, {
        //   style: 'currency',
        //   currency: acc.currency,
        // }).format(mov);

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
        </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };

  // <div class="movements__value">${mov.toFixed(2)}€</div>

  // displayMovements(account1.movements)

  // Calculate the balance for the movements
  const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

    // const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);

    // const formattedMov = new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(mov);

    // display the balance_value
    // labelBalance.textContent = `${acc.balance.toFixed(2)} €`;
    labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
  };
  // calcDisplayBalance(account1.movements);


  const calcDisplaySummary = function(acc) {
    const incomes = acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    // labelSumIn.textContent = `${incomes.toFixed(2)}€`;
    labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);


    const out = acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    // labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;
    labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);


    const interest = acc.movements.filter(mov => mov >0)
    .map(deposit => deposit * acc.interestRate / 100)
    // Bank rulle = Interest at least 1 EURO
    .filter((int, i, arr) => {
      console.log(arr);
      return int >=1;
    })
    .reduce((acc, int) => acc + int, 0);
    // labelSumInterest.textContent = `${interest.toFixed(2)}€`;
    labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
  };
  // calcDisplaySummary(account1.movements);

//   console.log(containerMovements.innerHTML);
  const createUsernames = function (accs) {
    accs.forEach(function(acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });
  };
  createUsernames(accounts);
// console.log(accounts);

  const updateUI = function(acc) {
    // Display movements
    displayMovements(acc);
    // Display balance
    calcDisplayBalance(acc);
    // Display summary
    calcDisplaySummary(acc);
  };

// Timer Implement for login - Logout
  const startLogoutTimer = function() {
      const tick = function () {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);
    
        // In each call, print the remaining time to UI
        labelTimer.textContent = `${min}:${sec}`;
    
        // When 0 seconds, stop timer and log out user
        if (time === 0) {
          clearInterval(timer);
          labelWelcome.textContent = "Log in to get started";
          containerApp.style.opacity = 0;
      }
    
        // Decrease 1s
        time--;
    };
    
      // Set time to 5 minutes
      let time = 120;
    
      // Call the timer every second
      tick();
      const timer = setInterval(tick, 1000);
    
      return timer;
  };

// Event handler - Login Implementation
  let currentAccount, timer;

// // Fake always logged in
//   currentAccount = account1;
//   updateUI(currentAccount);
//   containerApp.style.opacity = 100;

  // day|month|year

// // Experimenting API 
//   const now = new Date();
//   const options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//     weekday: 'long',
//   };
//   const locale =  navigator.language;
//   console.log(locale);
//   labelDate.textContent = new Intl.DateTimeFormat('en-US', locale, options).format(now); //http://www.lingoes.net/en/translator/langcode.htm


  btnLogin.addEventListener('click', function (e) {
    // Prevent form from Submitting
    e.preventDefault();

    // console.log('LOGIN');

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if(currentAccount?.pin === +(inputLoginPin.value)) {
      // Display UI and welcome message after successfull login
      // console.log('LOGIN');
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`; // set the opacity to 0 in style.css for displat the UI
      containerApp.style.opacity = 100;

      // Create current date and time
      const now = new Date();
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        // weekday: 'long',
      };
      // const locale =  navigator.language;
      // console.log(locale);
    
      labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now); //http://www.lingoes.net/en/translator/langcode.htm

      // const now = new Date();
      // const day = `${now.getDate()}`.padStart(2, 0);
      // const month = `${now.getMonth() + 1}`.padStart(2, 0);
      // const year = now.getFullYear();
      // const hour = `${now.getHours()}`.padStart(2, 0);
      // const min = `${now.getMinutes()}`.padStart(2, 0);
      // labelDate.textContent = `${day}/${month}/${year}, ${hour}: ${min}`;

      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur(); 


      // // Display movements
      // displayMovements(currentAccount.movements)
      // // Display balance
      // calcDisplayBalance(currentAccount);
      // // Display summary
      // calcDisplaySummary(currentAccount);

      // Timer
      if (timer) clearInterval(timer);
      timer = startLogoutTimer();

      // Update UI
      updateUI(currentAccount)

    } 
  });

// Transferring amount
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  // console.log(amount, receiverAcc);

  // Clean the Input field
  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount && 
    receiverAcc?.username !== currentAccount.username) {
      // console.log('Transfer valid');

      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount)
    }

    // Reset the timer - clearInterval
    clearInterval(timer);
    timer = startLogoutTimer();


});

// Loan request 
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  // rounding to the load functionality
  const amount = Math.floor(inputLoanAmount.value);

  // const amount = +(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset the timer - clearInterval
    clearInterval(timer);
    timer = startLogoutTimer();
    }, 2500);
  }
  // Clean the Input field
  inputLoanAmount.value = '';
});

// Close account - using findIndex method
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Delete');

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);
    // .indexOf(23)

    // Delete UI
    accounts.splice(index, 1);

    // Hide UI - Logout
    containerApp.style.opacity = 0;
  }

  // Clean the input field for close account
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false; //state variable set to false
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  // displayMovements(currentAccount.movements, true);
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

// calculate the overall balance all the movements of all the accounts --- flat method
/*
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); */

// lets structure the code on overallBalance calc more optimize way using Chaining method
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);







// Calculate the balance for the movements 
// const calcDisplayBalance = function(movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   // display the balance_value
//   labelBalance.textContent = `${balance} EUR`;
// };





// compute the username using Map method
// const user = 'Steven Thomas Williams';
// const username = user.toLowerCase().split(' ').map(function(name) {
//   return name[0];
// }).join('');
/*
const username = user
.toLowerCase()
.split(' ')
.map(name => name[0])
.join('');
console.log(username); */


// Bank rulle = Interest at least 1 EURO





// ---------
// // Some and Every method
// console.log(movements.every(mov => mov >0));
// console.log(account4.movements.every(mov => mov >0));
// */

// // flat and flatMap array 
// const arr = [[1,2,3], [4,5,6],7,8];
// console.log(arr.flat());

// const arrDeep = [[[1,2],3], [4,[5,6]],7,8] // deeper nested array
// console.log(arrDeep.flat(2));
// ---------




// -------------
// // Sorting arrays
// // - Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// console.log(movements.sort()); // does not work

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < a) return -1;
// });
// console.log(movements);

// movements.sort((a, b) => a - b); // more optimized way
// console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < a) return 1;
// });
// console.log(movements);

// movements.sort((a, b) => b - a); // more optimized way
// console.log(movements);

// */