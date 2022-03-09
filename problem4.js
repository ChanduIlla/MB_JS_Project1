function findCarYear(inventory) {
    let  carYearArray  = []
    for (let i = 0 ; i < inventory.length ; i++) {
        let car = inventory[i].car_year ;
        carYearArray.push(car)
    }
    return carYearArray
}

module.exports = findCarYear ;