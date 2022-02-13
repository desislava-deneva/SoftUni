describe("Cinema ", function () {

    describe("Test showMovies …", function () {
        it('test showMovies with incorect input', () => {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.');

            assert.equal(cinema.showMovies(['a','b','c','d']), 'a, b, c, d');

        });
    });
    describe("Test ticketPrice …", function () {
        it('test ticketPrice with incorect input', () => {
            
            assert.throws(()=> cinema.ticketPrice('asd'), 'Invalid projection type.');
            assert.throws(()=> cinema.ticketPrice(), 'Invalid projection type.');
            assert.throws(()=> cinema.ticketPrice(null), 'Invalid projection type.');
            assert.throws(()=> cinema.ticketPrice(5), 'Invalid projection type.');

        });
        it('test ticketPrice with corect input', () => {
            const schedule = {
                "Premiere": 12.00,
                "Normal": 7.50,
                "Discount": 5.50
            }
            assert.equal(cinema.ticketPrice('Premiere'), 12.00);
            assert.equal(cinema.ticketPrice('Normal'), 7.50);
            assert.equal(cinema.ticketPrice('Discount'), 5.50);

        });
    });
    describe('Test swapSeatsInHall', ()=>{
        it('test swapSeatsInHall with correct inputs', ()=>{
            assert.equal(cinema.swapSeatsInHall(5,6), 'Successful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(20,6), 'Successful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(5,20), 'Successful change of seats in the hall.');


        });
        it('test swapSeatsInHall with incorrect inputs', ()=>{
            assert.equal(cinema.swapSeatsInHall(), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall('',''), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(-1,5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(50,5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(5,-1), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(5,21), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(5,5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(5,21), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(5,''), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall('',5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall('a','a'), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(5,'a'), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall({5:5},5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(5,{5:5}), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(5,0), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(0,5), 'Unsuccessful change of seats in the hall.');
            assert.equal(cinema.swapSeatsInHall(100,500), 'Unsuccessful change of seats in the hall.');

        });
    })
});