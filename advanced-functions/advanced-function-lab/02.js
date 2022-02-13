function solution(num) {
    
   function solve(n) {
       return n+num;
   }

   return solve.bind(num)
}

let add5 = solution(5);
console.log(add5);
console.log(add5(2));
console.log(add5(3));
