describe("Tests …", () =>  {
   
    describe('test 1', ()=>{

        describe("Tests 1", ()=> {
            it('test 1', ()=>{
                assert.equal(testNumbers.sumNumbers('a', 'b'),undefined);
            });
            it('test 1', ()=>{
                assert.equal(testNumbers.sumNumbers(3, 3),6);
            });
            it('test 1', ()=>{
                assert.equal(testNumbers.sumNumbers(5.533333, 5.53333),11.07);
            });
            it('test 1', ()=>{
                assert.equal(testNumbers.sumNumbers('3', '3'),undefined);
            });
        });

        
        describe("Tests 2", () =>{
            it('Tests 2', ()=>{

                assert.throws(()=> testNumbers.numberChecker('a'), 'The input is not a number!');
            });
            it('Tests 2', ()=>{

                assert.equal(testNumbers.numberChecker(4),'The number is even!');
               
            });
            it('Tests 2', ()=>{

                assert.equal(testNumbers.numberChecker(3),'The number is odd!');
               
            });
            it('Tests 2', ()=>{

                assert.throws(()=> testNumbers.numberChecker(), 'The input is not a number!');

               
            });
        });

        describe("Tests 3", () =>{
            it('Tests 3', ()=>{

                let arr1 = [10 , 10, 10];
                let result = 10;

                assert.equal(testNumbers.averageSumArray(arr1), result);
            });
            it('Tests 3', ()=>{

                let arr1 = [10 , 10, 10];
                let result = 10;

                assert.equal(testNumbers.averageSumArray(arr1), result);
            });
        });
        
    
    });
});
