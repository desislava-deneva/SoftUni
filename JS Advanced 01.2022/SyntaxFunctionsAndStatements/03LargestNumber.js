function solve(first, second, thurd){

  let largestNumber;
    if (first > second && first > thurd) {
      largestNumber = first;
    }else if (second > first && second > thurd) {
      largestNumber = second
    }else{
      largestNumber = thurd;
    }
    console.log(`The largest number is ${largestNumber}.`);
}
solve(-3, -5, 0);