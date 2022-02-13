function printEveryNelement(array, step) {
    let newArr = [];
    for (let index = 0; index < array.length; index+=step) {
        newArr.push(array[index]);
    }

    return newArr;
}