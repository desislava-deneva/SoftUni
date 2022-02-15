let Repository = class Repository {
    constructor(props) {
        this.props = props;
        this.data = new Map();

        let id = 0;
        this.nextId = function () {
            return id++;
        }
    }

    get count() {
        return this.data.size;
    }

    add(entity) {
        this._validate(entity);
        let id = this.nextId();
        this.data.set(id, entity);
        return id;
    }

    getId(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        return this.data.get(id);
    }

    update(id, newEntity) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this._validate(newEntity);
        this.data.set(id, newEntity);
    }

    del(id) {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this.data.delete(id);
    }

    _validate(entity) {
        //Validate existing property
        for (let propName in this.props) {
            if (!entity.hasOwnProperty(propName)) {
                throw new Error(`Property ${propName} is missing from the entity!`);
            }
        }

        //Validate property type
        for (let propName in entity) {
            let val = entity[propName];
            if (typeof val !== this.props[propName]) {
                throw new TypeError(`Property ${propName} is not of correct type!`);
            }
        }
    }
}


let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};

let repository = new Repository(properties);
let entity = {
    name: "Pesho",
    age: 22,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity);
repository.add(entity);


console.log(repository.getId(0));
console.log(repository.getId(1));
entity = {
    name: 'Gosho',
    age: 22,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.getId(1));
repository.del(0);
console.log(repository.count); 



module.exports = Repository;