/*
Tasks: Convert values from Fahrenheit (USA) to Celcius and Kelvin
Celsius = Fahrenheit minus 32, then multiply by 5 and divide by 9
Kelvin = Fahrenheit minus 32, then multiply by 5 and divide by 9 + 273.15
*/
//Assign to variable 'fahrenheit' a number (integer)
let fahrenheit = 32;
//Convert and print to Celsius
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(celsius);
//Convert and print to Kelvin
let kelvin = (fahrenheit + 459.67) * 5 / 9;
console.log(kelvin);
