/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/
//Standard:

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
 
console.log(bills, tips);
// We can also use an arrow function for calcTip if you prefer that

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;


// With Bonus:

const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
 
const bills1 = [125, 555, 44];
const tips1 = [calcTip1(bills1[0]), calcTip1(bills1[1]), calcTip1(bills1[2])];
const totals = [bills1[0] + tips1[0], bills1[1] + tips1[1], bills1[2] + tips1[2]];
 
console.log(bills1, tips1, totals);