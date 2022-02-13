function solve(array) {

    array.sort((a, b)=> a-b);
    
    let lengthOfArr = array.length;
    
    return array.slice((lengthOfArr/2));
    
    }