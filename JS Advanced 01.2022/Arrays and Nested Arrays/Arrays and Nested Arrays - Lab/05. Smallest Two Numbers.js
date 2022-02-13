function solve(array) {

    array.sort(function (a, b) {
        return a - b;
    });

    let first = array.shift();
    let second = array.shift();
    console.log(`${first} ${second}`);
}