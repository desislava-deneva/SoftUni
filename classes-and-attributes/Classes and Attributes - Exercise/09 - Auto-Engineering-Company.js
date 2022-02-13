function autoEngineering(array) {
    let cars = [];

    array.forEach(element => {

        let [carBrand, carModel, producedCars] = element.split(' | ');
        producedCars = Number(producedCars);

        if (!cars[carBrand]) {
            cars[carBrand] = [];
        }
        
        let obj = cars[carBrand].find(o => o.carModel === carModel);

        if (!obj) {
            cars[carBrand].push({carModel,producedCars});
        }else{
            obj.producedCars+= producedCars;
        }
    });

    for (const [key, value] of Object.entries(cars)) {
        console.log(key);

        for (const el of Object.values(value)) {
            console.log(`###${el.carModel} -> ${el.producedCars}`);
        }
    }
}

autoEngineering(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
);