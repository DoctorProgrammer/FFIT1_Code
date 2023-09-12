/*
Thema: if-then-else ("wenn-dann-sonst", conditional statements)
    und switch-case
 */
/*
Aufgabe - Zusätzlich Temperatur zur Meldung ausgeben
 */
//Input
'use strict';
let temp = 36;

if (temp <= 4) {
    console.log(`It is ${temp} °C and it's freezing outside!`);
} else if (temp <= 25) {
    console.log(`It's ${temp} °C and pretty nice out!`);
} else if (temp <= 35) {
    console.log(`It is ${temp} °C and  and very hot outside!`);
} else {
    console.log(`It's ${temp} °C and still quite warm!`);
}