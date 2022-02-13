function juiceFlavors(array) {

    let juices = [];
    let buttleOfJuses = {};
    
    array.forEach(element => {
        let [typeJuice, quantity] = element.split(' => ');
        let quantityNumber = Number(quantity);

        if (!juices[typeJuice]) {
            juices[typeJuice] = { quantity: 0 };
        }

        juices[typeJuice].quantity += quantityNumber;

        let liters = Math.floor(juices[typeJuice].quantity / 1000);

        if (liters > 0) {

            if (!buttleOfJuses[typeJuice]) {
                
                buttleOfJuses[typeJuice] = {};
                buttleOfJuses[typeJuice].buttle = 0;
            }

            buttleOfJuses[typeJuice].buttle += liters;
            juices[typeJuice].quantity -= liters * 1000;
        };
    });

    for (const [type, value] of Object.entries(buttleOfJuses)) {

        if (value.hasOwnProperty('buttle')) {
            console.log(`${type} => ${value.buttle}`);
        }
    }
}

juiceFlavors(
    ['Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']

);