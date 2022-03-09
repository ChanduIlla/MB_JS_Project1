function findLastCar(inventory) {
    let result ;
    for (let i = 0 ; i < inventory.length ; i++) {
        if ( i === inventory.length - 1 ) {
            result = inventory[i];
        }
    }
    return result ;
}
module.exports = findLastCar ;