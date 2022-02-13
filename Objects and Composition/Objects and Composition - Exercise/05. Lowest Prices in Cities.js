function solve(array) {
    let obj = {};

    array.forEach(el => {
        let [town, product, price] = el.split(' | ');

        price = Number(price);

        if (!obj[product]) {
            obj[product] = {price, town};
        }

        if (obj[product].price > price) {
            obj[product].price = price;
            obj[product].town = town;
        }
    });

    for (const prodName in obj) {
        console.log(`${prodName} -> ${obj[prodName].price} (${obj[prodName].town})`);
    }
}