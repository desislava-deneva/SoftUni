function solve(array) {

    let sum1 = 0;
    let sum2 = 0;

    for (let index = 0; index < array.length; index++) {
        sum1+= array[index][index];
        sum2+= array[index][array.length-1 - index];
    }
    
    return `${sum1} ${sum2}`;
}