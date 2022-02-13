function solve(array, start, end) {

    let startIndex = array.indexOf(start);
    let endIndex = array.indexOf(end);
    
    let result = array.slice(startIndex, endIndex+1)
    
    return result;
    }