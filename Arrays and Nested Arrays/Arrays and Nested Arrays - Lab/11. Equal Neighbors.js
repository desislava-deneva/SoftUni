function foo(input) {
    let c = 0;
    for (let i = 0; i < input.length - 1; i++) {
        for(let j = 0; j < input[i].length; j++) {
            if(input[i][j] === input[i + 1][j]) { c++ }
            if(input[i][j] === input[i][j + 1]) { c++ }
            if(i == input.length -2 && input[i+ 1][j] === input[i + 1][j + 1]) { c++ }
        };
    }
    console.log(c);
}