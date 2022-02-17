class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = []
        this.soldTickets = 0;
        this.profit = 0;
    }

    newScreening(date, hall, description) {
        let screening = this.screenings.find(s => s.date === date && s.hall == hall);

        if (screening) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }

        this.screenings.push({ date, hall, description });
        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets) {
        let screening = this.screenings.find(s => s.date === date && s.hall == hall);
        let index = this.screenings.findIndex(i => i.date === date && i.hall == hall);

        if (!screening) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }

        let profit = this.ticketPrice * Number(soldTickets);
        this.profit += profit;
        this.soldTickets += soldTickets;
        this.screenings.splice(index, 1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${profit}`
    }

    toString() {
        let result = [];
        result.push(`${this.movieName} full information:`);
        result.push(`Total profit: ${this.profit.toFixed(0)}$`);
        result.push(`Sold Tickets: ${this.soldTickets}`);

        if (this.screenings.length > 0) {
            result.push(`Remaining film screenings:`);
            let sorted = Object.values(this.screenings).sort((a,b)=> a.hall.localeCompare(b.hall));

            for (const line of sorted) {
                result.push(`${line.hall} - ${line.date} - ${line.description}`)
            }
        } else {
            result.push(`No more screenings!`);
        }

        return result.join('\n');
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
// console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
// console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
// console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
// console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
// console.log(m.endScreening('October 3, 2020', 'Main', 78));
// console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
