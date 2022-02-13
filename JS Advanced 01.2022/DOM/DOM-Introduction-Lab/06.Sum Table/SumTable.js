function sumTable() {
    let tdEl = document.getElementsByTagName('td');
    
    let tdElTotal = tdEl[7];
    let sum = 0;

    for (let index = 1; index < tdEl.length-1; index+=2) {
        sum+= Number(tdEl[index].textContent)
    }

    tdElTotal.textContent = sum;
}