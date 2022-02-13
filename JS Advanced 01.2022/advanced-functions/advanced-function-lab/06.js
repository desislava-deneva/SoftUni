function solve(arr) {
    let result = '';
    arr.forEach(row => {
        let [command, str] = row.split(' ');
        if (command == 'add') {
            result += str + ' ';
        } else if (command == 'remove') {

            while (result.includes(str)) {
                result = result.replace(str, '');
            }

        } else {
            console.log(result.trim().split(' ').join(','));
        }
    });
}

solve(
    ['add hello', 'add again', 'remove hello', 'add again', 'print']
);


