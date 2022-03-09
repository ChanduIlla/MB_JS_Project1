function carModels(inventory) {
    let  carModelArray  = []
    for (let i = 0 ; i < inventory.length ; i++) {
        let model = inventory[i].car_model ;
        carModelArray.push(model)
    }
    return carModelArray
}

module.exports = carModels ;