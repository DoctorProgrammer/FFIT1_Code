/*
Tasks: Declare variables and constants correctly
Declare and print variables, constants correctly based on the given comments below.
*/
/* -------------------------------------------- */
//Assign to variable 'Stadt' a French town
let Stadt = "Paris";
//Assign to constant 'Land' the corresponding Land
const Land = "Frankreich";
//print 'Land' and 'Stadt' to the console
console.log(Land);
console.log(Stadt);
//concatenate 'Land' and 'Stadt' and assign it to variable 'Ort'
let Ort = Land + ", " + Stadt;
//print 'Ort' to the console
console.log(Ort);
//Reassign a new French town to variable Stadt
Stadt = "Marseille";
//concatenate 'Land' and 'Stadt' and reassign it to variable 'Ort'
Ort = Land + ", " + Stadt;
//print 'Ort' to the console
console.log(Ort);
//Change the value of Land. Guess what is going to happen.
// Land = "Deutschland"; => TypeError: Assignment to constant variable.
//What is the workaround in order to have a second country (Land)?
const Land2 = "Deutschland";