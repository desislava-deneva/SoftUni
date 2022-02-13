function solve(array) {
    let newArray = []

    array.sort((a, b) => a - b);

    while (array.length != 0) {
        let firstEl = array.shift()
        let lastEl = array.pop()

        newArray.push(firstEl, lastEl);
    }
    return newArray;
}