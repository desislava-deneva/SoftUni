function tickets(array, criterion) {

    class Tiket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let result = [];

    array.forEach(el => {
        let [destination, price, status] = el.split('|');

        result.push(new Tiket(destination, price, status));
    });

    let sorted;

    if (criterion === 'destination') {
        sorted = result.sort((a, b) => a.destination.localeCompare(b.destination));

    } else if (criterion === 'price') {
        sorted = result.sort((a, b) => a.price - b.price);

    } else {
        sorted = result.sort((a, b) => a.status.localeCompare(b.status));

    }

    return sorted;
}
console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination')
)

