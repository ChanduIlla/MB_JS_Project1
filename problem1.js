function findCar(inventory) {
    let result ;
    for (let i = 0 ; i < inventory.length ; i++) {
        if ( inventory[i].id === 33) {
            result = inventory[i];
        }
    }
    return result ;
}
module.exports = findCar ;