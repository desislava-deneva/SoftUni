function solve(array) {

    let result = {};

    for (let key of array) {
        let [townName, townPopulation] = key.split(' <-> ' );

        if (result[townName] == undefined) {

        result[townName] = Number(townPopulation);

        }else{

        result[townName] += Number(townPopulation);
        
        }
    }

    for (const [key, value] of Object.entries(result)) {
       console.log(`${key} : ${value}`);
    }
}
