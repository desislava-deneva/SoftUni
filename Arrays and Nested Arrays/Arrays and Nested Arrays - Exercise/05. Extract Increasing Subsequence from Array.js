function solve(array) {
    return array.reduce(function(result, currentValue, index, initalArray) {
        if (currentValue >= result[result.length - 1] || result.length === 0) {
            result.push(currentValue)
        }
        return result;
    }, [])
}