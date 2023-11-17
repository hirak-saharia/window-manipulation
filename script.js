'use strict';

/*PROBLEM
We work for a company buliding a smart home thermometer. Our most recent task is this: "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understnding the problem
    // - What is temp amplitude ? Ans: difference between highest and lowest temp
    // - How to compute max and min temp?
    // - What's a sensor error ? And what to do?

// 2. Breaking up into sub-problems
    // - How to ignore errors?
    // - Find max value in temp array
    //- Find min value in temp array
    // - Subtract min from max (amplitude) and return it
/*
const calcTemAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue; // ignore error if its not a number

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
// calcTemAmplitude([3,7,4,1,8]);
const amplitude = calcTemAmplitude(temperatures);
console.log(amplitude);
*/


// Problme 2:
// Function should now receive 2 arrays of temps

    // 1. Understanding the problem
    // - With 2 arrays, should we implement functionality twice? No! Just merge two arrays

    // 2. Breaking up into sub-problems
    // - How to merge 2 arrays?
/*
const calcTemAmplitudeNew = function (t1, t2) {
        const temps = t1.concat(t2);
        console.log(temps);

        let max = temps[0];
        let min = temps[0];
        for (let i = 0; i < temps.length; i++) {
            const curTemp = temps[i];
            if(typeof curTemp !== 'number') continue; // ignore error if its not a number
    
            if (curTemp > max) max = curTemp;
            if (curTemp < min) min = curTemp;
        }
        console.log(max, min);
        return max - min;
};
// calcTemAmplitude([3,7,4,1,8]);
const amplitudeNew = calcTemAmplitudeNew([3,5,1], [9,0,5]);
console.log(amplitudeNew);
*/



// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

/// --------------------------------------///////////////////////
// Debugging with the console and BreakPoints
/*
const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',

        // C. Fix
        value: Number(prompt('Degree celsius:')), //prompt function always return string
        value: 10,
    };

    // B. Find
    // console.log(measurement);
    console.table(measurement);


    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};
// A. Identify the bug
console.log(measureKelvin());
*/

//////// --------------------------------------------//////////////////
/* Coding Challenge #1

Given an array of forcasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17°C in 1 days ...21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForcast' which takes in a array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 1: [12, 5, -5, 0, 4]

*/

// 1. Understanding the problem
    // - Array transformed to string, seperated by ...
    // - What is the X days? Ans: index + 1

// 2. Breaking up into sub-problems
    // - Transform array into string
    // - Transform each element to string to with °C
    // - String needs to contain day (index +1)
    // - Add ... between elements and start and end of string
    // - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C ...${data1[1]}°C ...${data1[2]}°C`); 

const printForcast = function(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += str + `${arr[i]}°C in ${i + 1} days ... `;
    }
    console.log('...' + str);
};
printForcast(data1);
