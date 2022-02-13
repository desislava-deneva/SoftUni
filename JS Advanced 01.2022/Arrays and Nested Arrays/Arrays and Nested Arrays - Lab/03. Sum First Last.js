function solve(arr) {
   
    let first = Number([...arr].shift());
    let last = Number([...arr].pop());

    return first + last;
}