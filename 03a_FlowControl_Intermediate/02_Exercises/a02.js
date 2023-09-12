/*
Task: Compute discounted price
A. Using if-then-else, determine discounts on a given price correctly based on comments below.
B. Check with different values for variable 'price and 'age' that discounts
are computed correctly.

Sample output
$ node a01-A.js
You need to define the price and the age! Try again.

$ node a01-A.js 50 5
With 5: Free entrance!

$ node a01-A.js 50 7
With 7: You will get a 50.00% discount!Pay CHF 25.00

$ node a01-A.js 50 15
With age 15: You will get a 50.00% discount! Pay CHF 25.00.

$ node a01-A.js 50 21
With age 21: NO discount! Pay CHF 50.00.

$ node a01-A.js 50 21 true
With age 21: You will get a 33.33% discount! Pay CHF 16.67.

$ node a01-A.js 50 65
With age 65: You will get a 33.33% discount! Pay CHF 16.67.
 */
//Argumente auslesen (parsen)
let args = process.argv.slice(2);
let price = args[0];
let age = args[1];
let isStudent = args[2];

//message variable
let message;
if(age === undefined || price === undefined) {
    message = `You need to define the price, age and whether you are a student or not! Try again.`;
} else {
    let discount;
    
    if (age <= 6) {
        discount = 100;
        message = `With ${age}: Free entrance!`;
    } 
    else if (age <= 16) {
        discount = 50;
        message = `With age ${age}: You will get a ${discount}.00% discount! Pay CHF ${price * (100 - discount) / 100}.`;
    } 
    else if (age >= 65 || isStudent === 'true') {
        discount = 33.33;
        message = `With age ${age}: You will get a ${discount}% discount! Pay CHF ${price * (100 - discount) / 100}.`;
    } 
    else {
        message = `With age ${age}: NO discount! Pay CHF ${price}.`;
    }
}

console.log(message);