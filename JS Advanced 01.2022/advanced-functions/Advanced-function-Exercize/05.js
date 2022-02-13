function add(n) {
    let sum =n;

    function inner(number) {
        sum+=number;

        return inner
    }
     inner.toString = ()=>{
         return sum;
     }

     return inner
}

console.log(add(1)(6)(-3).toString); 