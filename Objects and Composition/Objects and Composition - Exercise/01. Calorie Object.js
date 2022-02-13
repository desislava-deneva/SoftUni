function solve(array) {

    let obj = {};

    for (let index = 0; index < array.length-1; index+=2) {
        const nameFood = array[index];
        const numb  = Number(array[index+1]);
        obj[nameFood] = numb;
    }
    return obj;
}