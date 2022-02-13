function solve(obj) {

    function createEngine(hp) {
        let engine = {};

        if (hp <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        }else if (hp > 90 && hp <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        }else if (hp > 120 && hp <= 200) {
            engine.power = 200;
            engine.volume = 3500;
        }

        return engine;
    }

    function createCarriage (type, color) {
        let carriage  = {type, color};

        return carriage;
    }

    function createWheels (numb) {
        let wheels = [];
        if (numb%2==0) {
            numb--
        }

        while (wheels.length!=4) {
            wheels.push(numb);
        }
        return wheels;
    }

    return{
        model: obj.model,
        engine: createEngine(obj.power),
        carriage: createCarriage(obj.carriage, obj.color),
        wheels: createWheels(obj.wheelsize)
    }
}