const assert = require('chai').assert;
const dealership = require('../04-sum-of-numbers');

describe("dealership ", function () {

    describe("newCarCost ",  ()=> {

        it('Test passed when input is correct',()=>{
            let discountForOldCar = {
                'Audi A4 B8': 15000,
                'Audi A6 4K': 20000,
                'Audi A8 D5': 25000,
                'Audi TT 8J': 14000,
            }
            assert.equal(dealership.newCarCost('Audi A4 B8', 100000), 85000);
            assert.equal(dealership.newCarCost('Audi A6 4K', 100000), 80000);
            assert.equal(dealership.newCarCost('Audi A8 D5', 100000), 75000);
            assert.equal(dealership.newCarCost('Audi TT 8J', 100000), 86000);

        });

        it('passed when input in incorect', ()=>{
            assert.equal(dealership.newCarCost('', 100000),100000);
        })
    });

    describe('carEquipment', ()=>{
        it('Test passed when input is correct', ()=>{
            let arr = ['a','b','c','d'];

            assert.equal(dealership.carEquipment(arr, [0,1]), ['a','b']);
            assert.equal(dealership.carEquipment(arr, [0,1,2,3]), ['a','b','c','d']);
            assert.equal(dealership.carEquipment(arr, [3]), ['d']);
            assert.equal(dealership.carEquipment(arr, [0]), ['a']);



        })
    })
});
