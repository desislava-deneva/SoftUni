function solve(array) {
   
    let evenNumbers = [];
    for (let index = 0; index < array.length; index+=2) {
        
        let el = array[index];
        evenNumbers[evenNumbers.length] = el;
    }

    console.log(evenNumbers.join(' '));
}