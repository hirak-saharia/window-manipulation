
// We will loop over an array backwards, and then second we will also create a loop inside another loop.

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
// start with 4, 3, .. ,0
for (let i = jonas.length; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// Loop Inside a Loop
/ *Let's say that we have three different exercises and we want to repeat each of them five times. So that means a total of 15 repetition five for each of the three exercises. So to lock all these exercises, we will need a loop inside a loop. */

// Start with 3 excersise first
for (let excersise = 1; excersise < 4; excersise++) {
    console.log(`--------Starting excersize ${excersise}`);

    // inside of a loop
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excersize ${excersise}: Lifting weight repetition ${rep} 💪`);
    }
}

