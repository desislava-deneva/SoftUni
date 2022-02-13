class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
        this.transaction = {};
    }

    newCustomer({firstName, lastName, personalId}) {
        let person = this.allCustomers.find(o => o.firstName == firstName && o.lastName == lastName);
        if (person) {
            return `${firstName} ${lastName} is already our customer!`
        }
        this.allCustomers.push({ firstName, lastName, personalId });

        return { firstName, lastName, personalId };

    }

    depositMoney(personalId, amount) {
        amount = Number(amount);
        let person = this.allCustomers.find(o => o.personalId == personalId);

        if (!person) {
            return `We have no customer with this ID!`;
        }
        if (person && !person.hasOwnProperty('totalMoney')) {
            person.totalMoney = 0;
            this.transaction[person.personalId] = [];
        }
        person.totalMoney += amount;
        this.transaction[person.personalId].push(`${person.firstName} ${person.lastName} made deposit of ${amount}$!`);
        return `${person.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        amount = Number(amount);
        let person = this.allCustomers.find(o => o.personalId == personalId);

        if (!person) {
            return `We have no customer with this ID!`;
        }

        if (person.totalMoney - amount < 0) {
            throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`)
        }
        person.totalMoney -= amount;
        this.transaction[person.personalId].push(`${person.firstName} ${person.lastName} withdrew ${amount}$!`);

        return `${person.totalMoney}$`;
    }

    customerInfo(personalId) {
        let person = this.allCustomers.find(o => o.personalId == personalId);
        let result = [];
        if (!person) {
            return `We have no customer with this ID!`;
        }

        result.push(`Bank name: ${this.bankName}`);
        result.push(`Customer name: ${person.firstName} ${person.lastName}`);
        result.push(`Customer ID: ${person.personalId}`);
        result.push(`Total Money: ${person.totalMoney}$`);
        result.push(`Transactions:`);
        let index = this.transaction[personalId].length
        this.transaction[personalId].reverse();
        this.transaction[personalId].forEach(line => {
            result.push(`${index}. ${line}`);
            index--;
        });

        return result.join('\n')

    }

}

//Unexpected error: Incorrect output: expected 'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!'
//                                    to equal 'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made depostit of 250$!\n1. Svetlin Nakov made depostit of 250$!'


let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
