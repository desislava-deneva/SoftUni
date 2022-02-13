describe("Tests dealership", () =>{
    describe("dealership.newCarCost ", () =>{

        it("Test discount for old car …", ()=> {
           
            assert.equal(dealership.newCarCost('Audi A4 B8', 100000), 85000);
            assert.equal(dealership.newCarCost('Audi A6 4K', 100000), 80000);
            assert.equal(dealership.newCarCost('Audi A8 D5', 100000), 75000);
            assert.equal(dealership.newCarCost('Audi TT 8J', 100000), 86000);
            assert.equal(dealership.newCarCost('Audi TT 8A', 100000), 100000);
            assert.equal(dealership.newCarCost('', 100000), 100000);
        });

        it("Test carEquipment", ()=> {
            let extrasArr = ['a', 'b', 'c', 'd'];
            let indexArr = [0,3];
            let result = ['a', 'd'];
            assert.deepEqual(dealership.carEquipment(extrasArr, indexArr), result );
           
        });
        it("Test carEquipment", ()=> {
            let extrasArr = ['a', 'b', 'c', 'd'];
            let indexArr = [0, 3, 4];
            let result = ['a', 'd', undefined];
            assert.deepEqual(dealership.carEquipment(extrasArr, indexArr), result );
           
        });

        it('test euroCategory functionalyty', ()=>{
            let category = 4;
            assert.equal(dealership.euroCategory(category), 'We have added 5% discount to the final price: 14250.' );
        })
        it('test euroCategory functionalyty', ()=>{
            let category = 3;
            assert.equal(dealership.euroCategory(category), 'Your euro category is low, so there is no discount from the final price!' );
        })
        it('test euroCategory functionalyty', ()=>{
            let category = 0;
            assert.equal(dealership.euroCategory(category), 'Your euro category is low, so there is no discount from the final price!' );
        })
     });
});
