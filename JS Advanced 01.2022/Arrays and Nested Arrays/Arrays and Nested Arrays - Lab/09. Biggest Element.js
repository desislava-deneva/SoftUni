function solve(array) {

    let biggerElement = null;

    for (const row of array) {
        for (const col of row) {
            if (biggerElement === null) {
                biggerElement = col;
            }

            if (biggerElement < col) {
                biggerElement = col
            }
        }
    }
    
    return biggerElement;
}