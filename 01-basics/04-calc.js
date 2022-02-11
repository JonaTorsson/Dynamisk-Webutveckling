/**
 * Calc stuff
 */

const geo = require('./moduls/geometry') // require tar fram filen jag vill använda i den jag är i

const round = require('./moduls/roundWithDecimal')

console.log(geo);

let radius = 4;

let area = geo.area(radius);
let approxArea = Math.round(area * 10) / 10; // avrundar till en decimal

console.log(`The area of circle with radius ${radius} is:`, area);
console.log(`The approxArea of circle with radius ${radius} is:`, approxArea);

let circumference = geo.circumference(radius);
console.log(`The circumference of circle with radius ${radius} is:`, circumference);


