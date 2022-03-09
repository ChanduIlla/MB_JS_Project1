const carModels = require('../problem3');
const inventory = require('../inventory');
const carModelArray = carModels(inventory) ;
carModelArray.sort();
console.log(carModelArray)