class Company {
    constructor(){
       this.departments = [];

    }

    addEmployee(name, salary, position, department){
        if (!name || !salary|| !position || !department || Number(salary) < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            department[department] = {name, salary, position};
        }

        return  `New employee is hired. Name: ${name}. Position: ${position}`;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////


class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {
        let arr = [name, salary, position, department];
        arr.some((element) => {
            if ((element === '' || element === undefined || element === null)
                || (Number(salary) < 0)) {
                throw new Error('Invalid input!');
            }
        });

        let currentEmoployee = {
            name: name,
            salary: Number(salary),
            position: position
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push(currentEmoployee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = '';
        let totalSalary = 0;

        for (let [key, emoployees] of Object.entries(this.departments)) {
            let currentAverageSalary = this.departments[key].reduce((acc, el) => acc + el.salary, 0) / emoployees.length
            if (currentAverageSalary > totalSalary) {
                bestDepartment = key;
                totalSalary = currentAverageSalary;
            }
        }

        if (bestDepartment !== '') {
            this.departments[bestDepartment].sort((a, b) =>
                b.salary - a.salary || a.name.localeCompare(b.name));

            let result = `Best Department is: ${bestDepartment}\n`;
            result += `Average salary: ${totalSalary.toFixed(2)}\n`;

            for (let currentWorker of Object.values(this.departments[bestDepartment])) {
                result += `${currentWorker.name} ${currentWorker.salary} ${currentWorker.position}\n`
            }

            return result.trim();
        }
    }
}