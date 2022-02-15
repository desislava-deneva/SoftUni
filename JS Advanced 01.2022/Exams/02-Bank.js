class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let { firstName, lastName, personalId } = customer;
        personalId = Number(personalId);
        let person = this.allCustomers.find(o => o.personalId === personalId && o.firstName === firstName &&o.lastName === lastName);

        if (person) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }

        this.allCustomers.push({ firstName, lastName, personalId });

        return customer;
    }

    depositMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);
        let index;
        let person = this.allCustomers.find(o => o.personalId === personalId);

        if (!person) {
            throw new Error`We have no customer with this ID!`;
        }

        if (!person.hasOwnProperty('totalMoney')) {
            person.totalMoney = 0;
            person.transaction = [];
        }
        index = person.transaction.length;

        person.totalMoney += amount;
        person.transaction.push(`${index + 1}. ${person.firstName} ${person.lastName} made deposit of ${amount}$!`);
        return `${person.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);

        let person = this.allCustomers.find(o => o.personalId === personalId);
        if (!person) {
            throw new Error('We have no customer with this ID!');
        }

        if (person.totalMoney  < amount && person.hasOwnProperty('totalMoney')) {
            throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`);
        }

        person.totalMoney -= amount;
        person.transaction.push(`${person.transaction.length + 1}. ${person.firstName} ${person.lastName} withdrew ${amount}$!`)
        return `${person.totalMoney}$`
    }

    customerInfo(personalId) {
        personalId = Number(personalId);
        let result = [];
        let person = this.allCustomers.find(d => d.personalId === personalId);

        if (!person) {
            throw new Error('We have no customer with this ID!');
        }

        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${person.firstName} ${person.lastName}`);
        result.push(`Customer ID: ${personalId}`);
        result.push(`Total Money: ${person.totalMoney}$`);
        result.push(`Transactions:`);

        let reverse = person.transaction.reverse();
        for (const line of reverse) {
            result.push(line);
        }
        return result.join('\n');
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));