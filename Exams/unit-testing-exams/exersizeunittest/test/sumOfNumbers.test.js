
const { assert } = require('chai');
const library = require('../sumOfNumbers');


describe("Tests …", () => {

    it('Test function calcPriceOfBook', () => {
        let price = 20;
        let total = price - (price * 0.5);

        assert.equal(library.calcPriceOfBook('book', 1980), `Price of book is ${total.toFixed(2)}`)
    })


});


