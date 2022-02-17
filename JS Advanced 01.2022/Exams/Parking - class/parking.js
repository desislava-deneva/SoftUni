class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = []
    }

    addCar(carModel, carNumber) {

        if (this.vehicles.length + 1 > this.capacity) {
            throw new Error("Not enough parking space.");
        }

        this.vehicles.push({ carModel, carNumber, 'payed': false });
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(c => c.carNumber == carNumber);

        if (!car) {
            throw new Error("The car, you're looking for, is not found.");
        }

        if (!car.payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        let indexCar = this.vehicles.findIndex(c=> c.carNumber == carNumber);
        this.vehicles.splice(indexCar, 1);

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let car = this.vehicles.find(c => c.carNumber == carNumber);

        if (!car) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }

        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {

        let result = [];
        let emptySlots = this.capacity - this.vehicles.length;
        result.push(`The Parking Lot has ${emptySlots} empty spots left.`);

        if (!carNumber) {

            let sorted = Object.values(this.vehicles).sort((a, b) => a.carModel.localeCompare(b.carModel));
            for (const car of sorted) {

                let isPayed = car.payed ? `Has payed` : `Not payed`;
                result.push(`${car.carModel} == ${car.carNumber} - ${isPayed}`)
            }
        } else {

            let car = this.vehicles.find(c => c.carNumber == carNumber);
            let isPayed = car.payed ? `Has payed` : `Not payed`;
            result.push(`${car.carModel} == ${car.carNumber} - ${isPayed}`)
        }

       return result.join('\n');
    }
}

const parking = new Parking(12);
console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

// The Volvo t600, with a registration number TX3691CA, parked.
// The Parking Lot has 11 empty spots left.
// Volvo t600 == TX3691CA - Not payed
// TX3691CA's driver successfully payed for his stay.
// TX3691CA left the parking lot.


