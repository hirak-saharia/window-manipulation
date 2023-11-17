// Note - Sort method does not work with mixing numbers and string categories

// Sorting arrays
// - Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// console.log(movements.sort()); // does not work

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < a) return -1;
// });
// console.log(movements);

movements.sort((a, b) => a - b); // more optimized way
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < a) return 1;
// });
// console.log(movements);

movements.sort((a, b) => b - a); // more optimized way
console.log(movements);