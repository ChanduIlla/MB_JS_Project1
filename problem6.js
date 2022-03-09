function findBMWAndAudiCars(inventory) {
    BMWAndAudiCarsArray = []
    for (i = 0 ; i < inventory.length ; i++ ) {
        if ( inventory[i].car_make === "BMW" || inventory[i].car_make === "Audi") {
            BMWAndAudiCarsArray.push(inventory[i])
        }
    }
    return BMWAndAudiCarsArray ;
}

module.exports = findBMWAndAudiCars ;