// Falsy_values: values that are not exactly false, but will become false when we try to convert them into a boolean. In JavaScript, there are only five falsy values: 0, '', undefined, null, and NaN.

// Truthy_values: Everything else are called truthy values. So, values that will be converted to true, for example: any number that is not zero or any string that is not an empty string will be converted to true when we attempt to convert them to a boolean.



console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); // empty object
console.log(Boolean(''));


const money = 0;
if (money) {
    console.log("Don't spend it all ;)");

} else {
    console.log('You should get a job!');
}

// Since money is zero, and so zero is converted to false as its a falsy value. As a result, the else blocl here is executed, and so on the console we see 'You should get a job'.

// If we have money = 100, then the the if block will be executed as its truthy values.\
const money1 = 100;
if (money1) {
    console.log("Don't spend it all ;)");

} else {
    console.log('You should get a job!');
}

// Example: If a variable is actually defined or not.

let height;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is Undefined');
}

// Since, we know that height is undefined in this moment, because we didn't assign it any value yet. And undefined is a falsy value. The height variable here in this logical context, will automatically converted to a boolean. So, height is falsy value and therefore, the else block will be executed.

//But if we assing value height = 123, then the if block will be executed.

const height1 = 123;
if (height1) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is Undefined');
}