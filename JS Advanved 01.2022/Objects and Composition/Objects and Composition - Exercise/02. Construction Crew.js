function solve(obj) {

    for (let [key, value] of Object.entries(obj)) {
        if (obj.dizziness) {
            obj.levelOfHydrated+= (obj.weight*0.1)*obj.experience;
            obj.dizziness = false;
        }
    }
    return obj;
}