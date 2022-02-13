class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer,
            this.location = location,
            this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 },
            this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        let numbMoney = Number(money);

        let person = this.listOfParticipants.find(p => p.name == name);

        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (person) {
            return `The ${name} is already registered at the camp.`;
        }

        if (numbMoney < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push(
            {
                name,
                condition,
                power: 100,
                wins: 0
            });
        return `The ${name} was successfully registered.`;

    }

    unregisterParticipant(name) {
        let person = this.listOfParticipants.find(p => p.name == name);
        let indexOfPerson = this.listOfParticipants.indexOf(person);


        if (person) {

            this.listOfParticipants.splice(indexOfPerson, 1);
            return `The ${name} removed successfully.`;

        } else {
            return `The ${name} is not registered in the camp.`;
        }

    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let person1 = this.listOfParticipants.find(p => p.name == participant1);
        let person2 = this.listOfParticipants.find(p => p.name == participant2);


        if (typeOfGame == 'WaterBalloonFights') {
            if (!person1 || !person2) {
                throw new Error(`Invalid entered name/s.`)
            }
            if (person1.condition != person2.condition) {
                throw new Error(`Choose players with equal condition.`)
            }

            if (person1.power > person2.power) {
                person1.wins++;
                return `The ${person1.name} is winner in the game ${typeOfGame}.`

            } else if (person1.power < person2.power) {
                person2.wins++;
                return `The ${person2.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            }
        } else {

            if (!person1) {
                throw new Error(`Invalid entered name/s.`)
            }
            person1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString() {
        let result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants.sort((a, b) => b.wins - a.wins).forEach((line) => {

            result.push(`${line.name} - ${line.condition} - ${line.power} - ${line.wins}`)

        });

        return result.join('\n');

    }

}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Desislava Deneva", "student", 300));
console.log(summerCamp.registerParticipant("Pesho Denev1", "student", 300));

console.log(summerCamp.timeToPlay('Battleship', "Pesho Denev1"));

console.log(summerCamp.timeToPlay('WaterBalloonFights', "Pesho Denev1", "Desislava Deneva"));





// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


