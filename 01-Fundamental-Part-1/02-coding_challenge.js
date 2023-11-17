// Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// TEST DATA 1: Marks weight 78 kg and is 1.69 m tall. John weight 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weight 95 kg and is 1.88 m tall. John weight 85 kg and is 1.76 m tall.

/* Use the BMI example from challenge 1, and the code you already wrote, and improve it.

1. Print a nice output to the console, saying who has the higher BMI. The message cab  be either "Mark's BMI is higher than John's !" or "John's BMI is higher than John's (23.9)!"

2. Use a template lateral to include the BMI values is the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

*/

// Test Data 1:
// const masaMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// Test DATA 2:
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn ** heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);


// console.log(BMIMark, BMIJohn, markHigherBMI);

// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!")

// } else {
//     console.log("John's BMI is higher than Mark's!")
// }

// 2. Using template literal
if (BMIMark > BMIJohn) {
   console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`)

}