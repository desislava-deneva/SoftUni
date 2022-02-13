function factory(library, orders) {
    let array = [];

    for (const order of orders) {
        const obj = Object.assign({}, order.template)

        for (const part of order.parts) {
            obj[part] = library[part]
        }
        
        array.push(obj);
    }
    return array
}