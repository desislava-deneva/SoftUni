function solve(array) {

    let result = [];

    for (let index = 1; index < array.length; index+=2) {
        const element = array[index];
        result.push(element*2)
    }

    return result.reverse();
}