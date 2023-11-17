/* So destructuring is an ESX feature and it's basically a way of unpacking values from an array or an object into separate variables. So in other words destructuring is to break a complex data structure down into a smaller data structure like a variable. So for arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way. */

'use strict';

/*
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Itali',
    categoris: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad',],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // Receive 2 returns values from a function
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[3];

// declare 3 variable at same time
const [x,y,z] = arr; //destructering assignment
console.log(x,y,z);
console.log(arr); // original arr wont be change

// Lets work with the data from Restaurent

const [first, second] = restaurant.categoris;
console.log(first,second); //printed first and second elements from Categories.

// lets take only the first and the third category elements
// To do that, simple leave a hole in the destructering operator
const [first1, , second1] = restaurant.categoris;
console.log(first1, second1);

// Let's say the Owner of the restaurent now decided to switch the main and the secondary category. Right now the primary is Italian and the secondary is Vegetarian. So now they wanted to switch it.

let [main, secondary] = restaurant.categoris;
console.log(main, secondary);

// If we would have to switch, without destructering - we need to create a temp variable like ---and assign
const temp = main;
main = secondary;
secondary = temp;
console.log(main,secondary);

// Create an array for both of them - a new array with the two variable inverted.
[secondary, main] = [secondary, main] // simple reassigning value
console.log(main, secondary);


// Another trick with destructering - we can have function, return an array and then we can immediately destruct the result into different variables.
// So this allows returning multiple variables from a function.
    // Let's wrtie a function to order food----------

// console.log(restaurant.order(2,0));
// Receive 2 returns values from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

// What happend if we have a nested array---------Nestd Destructering
const nested = [2,4, [5,6]] // array inside an array
// const [i, ,j] = nested;
// console.log(i, j);

//To get All the individual values - need to do destructering inside of destructering.
const [i, ,[j, k]] = nested;
console.log(i,j,k);

// When we dont know the length of an array - set defauly values for the variables >>> Its bery usefull >> to get data from an API
const [p=1,q=1, r=1] = [8,9];
console.log(p, q, r);

*/


/* Destructuring Objects
-- We use the curly braces to destructure objects.
-- Then all we have to do is to provide the variable names that match the property names that we want to retrieve from the object.
-- So the obviuos choice here of object to destructure, is restaurant.


*/

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Itali',
    categoris: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad',],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },



    // Receive 2 returns values from a function
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // Order and reveived 
    orderDelivery: function ({
        starterIndex = 1,// set to default 
        mainIndex = 0,
        time = '20:00',
        address
    }) 
    {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});




// let's take the name, categories and opening hours.
const { name, openingHours, categoris} = restaurant;
console.log(name, openingHours, categoris);

// Now if we want the different variables from the property name
const {
    name: restaurantName, 
    openingHours: hours, 
    categoris: tags
}   = restaurant;
console.log(restaurantName, hours, tags);

// Another useful feature > when we are dealing with third-party data--
// For example > an API call - default value that doesnot exist on the object
// When we do not have hard-coded data

const { menu = [], starterMenu: starters = []} =
restaurant;
console.log(menu, starters);


// Mutated Variables in objects destructuring
let a  = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};
({a, b} = obj); // destructutering assignment into parenthesis.
console.log(a,b);



// Nested Object Destructuring
const {
    fri: { open, close },
} = openingHours;
console.log(open, close);