'use strict';

console.log('---------OOP------------');
// Constructor function
const Person = function(firstName, birtYear) {
    // console.log(this);
    // Instance Properties
    this.firstName = firstName;
    this.birtYear = birtYear;
    
    // Never do this
    // this.calcAge = function() {
    //     console.log(2037 - this.birtYear);
    // };
};

// Call the function
const jonas = new Person('Jonas', 1990);// new is a operator
console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {} 

const matlida = new Person('Matidla', 2017);
const jack = new Person('Jack', 1975);
console.log(matlida, jack);

console.log(jonas instanceof Person);

console.log('----------------------------Protoypes----------')
// Prototypes
console.log(Person.prototype);

Person.prototype.clacAge = function() {
    console.log(2037 - this.birtYear);
};
jonas.clacAge();
matlida.clacAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matlida)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// .prototypeOfLinkedObjects


// Set properties on Prototype not the methods
Person.prototype.species = 'Home Sapiens';
// console.log(jonas, matlida);
console.log(jonas.species, matlida.species);

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false



// Coding Challenge #1
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed +=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.break = function() {
    this.speed -=5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.accelerate();


// ES6 Classes --------------------------

// class expressions
// const PersonCl = class{}

/*---------------------
//class declaration
class PersonCl {
    constructor(firstName, birtYear) {
        this.firstName = firstName;
        this.birtYear = birtYear;
    }
    // methods will be added to .prototype property
    clacAge() {
        console.log(2037 - this.birtYear);
    }
    great() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birtYear;
    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.clacAge();
console.log(jessica.age);

console.log(jessica.__proto__=== PersonCl.prototype); // true

// PersonCl.prototype.great = function() {
//     console.log(`Hey ${this.firstName}`);
// };
jessica.great();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode
-----------------------------------------------*/


// Setters and Getters - very useful for data validation
    // Getters and setters are basically functions that get and set a value so just as the name says, but on the outside they still look like regular properties.

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },

};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);


class PersonCl {
    constructor(fullName, birtYear) {
        this.fullName = fullName;
        this.birtYear = birtYear;
    }
    // methods will be added to .prototype property
    clacAge() {
        console.log(2037 - this.birtYear);
    }
    great() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birtYear;
    }

    // Set a property that already exit
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.clacAge();
console.log(jessica.age);

console.log(jessica.__proto__=== PersonCl.prototype); // true

// PersonCl.prototype.great = function() {
//     console.log(`Hey ${this.firstName}`);
// };
jessica.great();

const walter = new PersonCl('Walter White', 1965);