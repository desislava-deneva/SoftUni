describe("numberOperations ", function () {

    describe("powNumber ", () => {

        it('test pow number function have to resurn 25', () => {
            assert.equal(numberOperations.powNumber(5, 5), 25);
        })
    });
    describe("numberChecker ", () => {

        it('test numberChecker shoud to trow error when input in NAN', () => {
            assert.throw(() => numberOperations.numberChecker('a'), 'The input is not a number!');
        })

        it('test numberChecker shoud to return The number is lower than 100!', () => {
            assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(1), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(-1), 'The number is lower than 100!');
        })

        it('test numberChecker shoud to return The number is greater or equal to 100!', () => {
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(10000), 'The number is greater or equal to 100!');
        });
    });

    describe("sumArrays ", () => {

        it('test sumArrays ', () => {

            let arr1 = [1, 2, 3]
            let arr2 = [1, 2, 3, 4];
            let result1 = [2, 4, 6];
            let result2 = [2, 4, 6, 4];

            assert.deepEqual(numberOperations.sumArrays(arr1, arr1), result1);
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), result2);
            assert.deepEqual(numberOperations.sumArrays(arr2, arr1), result2);
        })
    });
});