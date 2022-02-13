class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer,
            this.location = location,
            this.priceForTheCamp =
            {
                child: 150,
                student: 300,
                collegian: 500
            }

        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw "Unsuccessful registration at the camp.";

        } if (this.listOfParticipants.find(o => o.name === name)) {

            return `The ${name} is already registered at the camp.`;

        } if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push(
            { name, condition, power: 100, wins: 0 }
        )

        return `The ${name} was successfully registered.`

    }

    unregisterParticipant(name) {
        let flag = this.listOfParticipants.find(o => o.name === name);

        if (!flag) {
            throw `The ${name} is not registered in the camp.`
        }

        const index = this.listOfParticipants.findIndex(obj => obj.name === name);

        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        const index = this.listOfParticipants.findIndex(obj => obj.name === participant1);
        const index2 = this.listOfParticipants.findIndex(obj => obj.name === participant2);

        if (typeOfGame == 'Battleship') {

            if (index < 0) {
                throw `Invalid entered ${participant1}.`;
            }

            this.listOfParticipants[index].power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`

        } else {
            if (index < 0  || index2 < 0) {
                throw `Invalid entered ${participant1, participant2}.`
            }

            if (this.listOfParticipants[index].condition !== this.listOfParticipants[index2].condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (this.listOfParticipants[index].power > this.listOfParticipants[index2].power) {
                this.listOfParticipants[index].wins++;

                return `The ${participant1} is winner in the game ${typeOfGame}.`
            }
            else if (this.listOfParticipants[index].power < this.listOfParticipants[index2].power) {
                this.listOfParticipants[index2].wins++;

                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }

        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        
           let sorted = this.listOfParticipants.sort((a,b)=> b.wins - a.wins);
           
        for (const participant of sorted) {
           result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
            
        }

        return result.join('\n');
    }

}

//expected 'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\nSara Dickinson - child - 120 - 1\nPetar Petarson - child - 100 - 0\n'
//to equal 'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\nSara Dickinson - child - 120 - 1\nPetar Petarson - child - 100 - 0'

//Unexpected error: expected 'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\nPetar Petarson - child - 100 - 0\nSara Dickinson - child - 120 - 1\n' 
//to equal                   'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\nSara Dickinson - child - 120 - 1\nPetar Petarson - child - 100 - 0'

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant('Petar Petarson', 'child', 300));
console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));
console.log(summerCamp.timeToPlay("Battleship", 'Sara Dickinson'));

console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", 'Sara Dickinson'));

console.log(summerCamp.toString());






