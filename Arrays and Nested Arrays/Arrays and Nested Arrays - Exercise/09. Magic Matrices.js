function solve(array) {

    let isSame = true;
    let sumsRow = []

    for (const row of array) {

        const sum = row.reduce((acc, curr) => acc + curr);

        if (sumsRow.length === 0) {
            sumsRow.push(sum);
        }else if(sumsRow.length > 0 && sumsRow[0] != sum){
            return 'false';
        }

        if (array.length !== array[0].length) {
            return false;
            }
    }
    return isSame;
}