function solve(array) {

    array.sort((a,b)=> a.localeCompare(b));

    let num = 0;
    array.forEach(el => {
        console.log(`${num+1}.${el}`);
        num++
    });

}