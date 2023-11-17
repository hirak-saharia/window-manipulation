// A function is simply a piece of code that we can reuse over and over again in our code. So it's little bit like a variable but for whole chunks of code.

function logger() {
    console.log('My name is Hirak');
}
// calling / running / invoking function
logger();
logger();
logger();

// A function cannot only reuse a piece of code like we did it above but it can also receive data and return data back. 

// so for example, let's imagine a food processor, so we put food into the processor then the processor does something to our food which is the function body basically and then in the end the food processor returns to processed food for example, a juice and so that's exactly what we can do with functions as well and actually let's implement exactly this example.

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
// console.log(fruitProcessor(5,0));

// Now, we can reuse the function with different input values and then get a diffetent output
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// const num = Number('23');