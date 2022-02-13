function solve(name) {

    class Fighter {
        constructor(name) {
            this.name = name;
            this.health = 100;
            this.stamina = 100;
        }

        fight =  () => {
            this.stamina--
            console.log(`${this.name} slashes at the foe!`);
        }
    }

    function fighter(name) {
        return new Fighter(name)
    }

    return {fighter:fighter}
    
}

let create = solve();
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);

// let create = solve();
// const scorcher = create.mage("Scorcher");
// scorcher.cast("fireball")
// scorcher.cast("thunder")
// scorcher.cast("light")

// const scorcher2 = create.fighter("Scorcher 2");
// scorcher2.fight()

// console.log(scorcher2.stamina);
// console.log(scorcher.mana);






