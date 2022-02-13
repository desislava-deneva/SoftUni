function solve(array) {

    let heros = [];

    array.forEach(el => {
        let [name, level, items] = el.split(' / ' );

        level = Number(level);
        items = items ? items.split(', '): [];   
        let hero = {
            name,
            level,
            items
        }
        heros.push(hero)
    });

 console.log(JSON.stringify(heros))
}