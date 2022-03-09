const findCarYear = require('../problem4');
const inventory = require('../inventory');
const carYearArray = findCarYear(inventory) ;
carYearArray.sort();

module.exports = carYearArray ;

console.log(carYearArray)