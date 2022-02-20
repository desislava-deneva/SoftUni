describe("Libery ",  ()=> {

    describe("Test calcPriceOfBook …", function () {
        it('test calcPriceOfBook with corect input', () => {
            let price = 20;
            let total = price - (price * 0.5);

            assert.equal(library.calcPriceOfBook('book', 1980), `Price of book is ${total.toFixed(2)}`);
            assert.equal(library.calcPriceOfBook('book', 1979), `Price of book is ${total.toFixed(2)}`);
            assert.equal(library.calcPriceOfBook('book', 1981), `Price of book is ${price.toFixed(2)}`);

        });

        it('test calcPriceOfBook with incorect input', () => {

            assert.throws(() => library.calcPriceOfBook(0, 'book'), "Invalid input");
            assert.throws(() => library.calcPriceOfBook('', ''), "Invalid input");
            assert.throws(() => library.calcPriceOfBook([], []), "Invalid input");
            assert.throws(() => library.calcPriceOfBook({}, {}), "Invalid input");
            assert.throws(() => library.calcPriceOfBook(null, null), "Invalid input");
            assert.throws(() => library.calcPriceOfBook(undefined, undefined), "Invalid input");
            assert.throws(() => library.calcPriceOfBook('book', 'book'), "Invalid input");
            assert.throws(() => library.calcPriceOfBook(5, 5), "Invalid input");
            assert.throws(() => library.calcPriceOfBook(5, 'book'), "Invalid input");
        });

        it('test findBook', () => {
            let arr = ["Troy", "Life Style", "Torronto"];

            assert.throws(() => library.findBook([], 'book'), "No books currently available");
            assert.equal(library.findBook(arr, 'Troy'), `We found the book you want.`);
            assert.equal(library.findBook(arr, 'Torronto'), `We found the book you want.`);
            assert.equal(library.findBook(arr, 'Life Style'), `We found the book you want.`);
            assert.equal(library.findBook(arr, 'Life'), `The book you are looking for is not here!`);
        });

        it('test arrangeTheBooks', () => {
            const countShelves = 5;
            const availableSpace = countShelves * 8;

            assert.throws(() => library.arrangeTheBooks('book'), "Invalid input");
            assert.throws(() => library.arrangeTheBooks(-1), "Invalid input");

            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.");
            assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.");

        });
    });
});
