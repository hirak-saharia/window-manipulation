/* To coparision between for loop and while loop lets take the excersize example */

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep} 💪`);
}
// So implementing the same with a while loop, we still need the same components.
// So we still need a counter so that we can then actually print the current value to the console,we still need a condition so that we know when to stop and we still need to increase the counter somehow. Now in the while loop, it works a bit differently because for the while loop, we can only specify a condition. So while, and then just a condition is the only thing that we can specify here. So that's gonna be exactly the same as this one. So we want to keep the loop running while repetitions is less or equal 10. And that's actually why this loop is called while. So again, it's called the while loop because it will run while this condition is true.
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE Lifting weights repetition ${rep} 💪`);
    rep++;
}


// ----------Use Case-----------------Roll a Dice----------
/* A problem without any counter, but instead it will depend on a random variable, so without a number that is increasing. And let's create such an example here. */
//Roll a dice and then keep rolling the dice until we roll a six. And then when we roll a six, we stop. So essentially we will want to keep running the loop while the rolled dice is different from six.
console.log('------ Lets roll a Dice------------')
let dice = Math.trunc(Math.random() *6) +1;

while (dice != 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() *6) +1;
    if (dice == 6) console.log('Loop is about to end....');
}
