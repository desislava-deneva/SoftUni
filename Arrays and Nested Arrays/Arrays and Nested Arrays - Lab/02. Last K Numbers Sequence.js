function LastKNumbersSequence(n, k) {
    let array = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let startIndex = Math.max(0, i-k);

        for (let j = startIndex; j < i; j++) {
            sum += array[j];
        }
        array[i] = sum;
    }

    return array;
}