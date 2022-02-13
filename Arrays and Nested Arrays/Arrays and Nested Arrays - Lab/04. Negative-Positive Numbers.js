function solve(array) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const el = array[index];
 
        if (el >= 0) {
            result.push(el)
        }else{
            result.unshift(el)
        }
    }
 
    return result.join('\n');
 }