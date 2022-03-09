const findLastCar = require('../problem2');
const inventory = require('../inventory');
const result = findLastCar(inventory);
console.log(`Last Car is a ${result.car_make} ${result.car_model}`)