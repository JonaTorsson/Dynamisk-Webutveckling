/**
 * Avrunda decimaler
 */


let roundWith1Decimal = (num) => {
    Math.round(num * 10) / 10;
}

let roundWith2Decimal = (num) => {
    Math.round(num * 100) / 100;
}


module.exports = {
    roundWith1Decimal,
    roundWith2Decimal
}