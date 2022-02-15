const Repository = require('../repository');
const {assert, expect} = require('chai');

describe('Repository', function () {
    beforeEach(() => repository = new Repository({
        name: 'string',
        age: 'number',
        birthday: 'object'
    }));

    describe('tests Repository params', function () {
        it(`typeof input[name] !== string -> throw TypeError`, () => {
			repository.add({ name: '', age: 0, birthday: {}, })
			expect(() => repository.update(0,{ name: 0, age: 1, birthday: { date: 0 } })).to.throw(TypeError)
		});

        it('test params', function () {
            assert.equal(repository, repository)
        });

        it("Get Count", () => {
            assert.equal(repository.count, 0)
        });
        
        it('test props', function () {
            assert.equal(repository.name, repository.name);
            assert.equal(repository.age, repository.age);
            assert.equal(repository.birthday, repository.birthday);
        });
    });

    describe('test add()', ()=>{
        it('test add', function () {

            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
            repository.add(entity);

            assert.equal(repository.getId(0), entity);
            assert.equal(repository.getId(1), entity);

        });

        it('test add', () => {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            assert.equal(repository.add(entity), 0);
            assert.equal(repository.add(entity), 1);
        });

        it('test add when prop name is missing => to trow error', function () {
            let missProps = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            }
            assert.throws(() => repository.add(missProps), `Property name is missing from the entity!`);
        });

        it('test add when prop age is missing => to trow error', function () {
            let missProps = {
                name: 'Pesho',
                birthday: new Date(1998, 0, 7)
            }
            assert.throws(() => repository.add(missProps), `Property age is missing from the entity!`);
        });

        it('test add when prop age is missing => to trow error', function () {
            let missProps = {
                name: 'Pesho',
                age: 22,
            }
            assert.throws(() => repository.add(missProps), `Property birthday is missing from the entity!`);
        });
    })

    describe('tests getId(), update() , del() when id is missing', function () {
        it('test id when id is missing', function () {
            
            assert.throws(() => repository.getId(-1), 'Entity with id: -1 does not exist!');
            assert.throws(() => repository.update(-1), 'Entity with id: -1 does not exist!');
            assert.throws(() => repository.del(-1), 'Entity with id: -1 does not exist!');
        });
    });

    describe(' tests update()', function () {
        it('test update when add new entity', function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
            repository.add(entity);
            entity = {
                name: 'Gosho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.update(1, entity);
            assert.equal(repository.getId(1), entity);
        });

    });

    describe('test del()', () => {

        it('test when del id is corect', function () {
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity);
            repository.add(entity);
            repository.del(0);

            assert.equal(repository.count, 1);
        });

        it(`deletes index properly`, () => {
			repository.add({ name: '', age: 1, birthday: {} })
			repository.add({ name: '', age: 1, birthday: {} })
			repository.del(1)
			expect(repository.data.has(1)).to.eq(false)
		});
    })
});