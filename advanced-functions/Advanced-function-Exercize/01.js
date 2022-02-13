function solve(arr, type) {
    let result = [];
    if (type == 'asc') {
        arr = arr.sort((a,b)=> a-b);
    }else{
        arr = arr.sort((a,b)=> b-a);

    }
    //return arr
    return arr;
}

solve(
    [14, 7, 17, 6, 8], 'asc'
);