function findCar(inventory,searchId ) {
    if ((typeof(searchId) === 'undefined') || (inventory.length === 0)) {
        return []
    }
    if (inventory.length > 0) {
        for (let i = 0 ; i < inventory.length ; i++) {
            if ( inventory[i].id === searchId) {
                let carObject = inventory[i];
                return `Car ${carObject.id} is a ${carObject.car_year} ${carObject.car_make} ${carObject.car_model}`
            }
        }
    } 
}
module.exports = findCar ;