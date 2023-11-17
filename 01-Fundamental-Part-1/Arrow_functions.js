// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

/*
// Example: We want to calculate how many years a person has left until retirement. 
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1990));
// Thats the scenerio when we have one parameter here 
*/

// But when we have multiple parameters ??
// In this case, we need to wrap the parameters into parentheses (birthYear)
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1990, 'Jonas'));
console.log(yearsUntilRetirement(1989, 'Bob'));