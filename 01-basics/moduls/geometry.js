/**
 * 
 * do all things geometry related
 */


const { PI } = Math;

const area = r => PI * r ** 2;

const circumference = r => 2 * PI * r;


// möjliggör att man kan exportera de delar jag har valt
module.exports = {
    area, 
    circumference,
}