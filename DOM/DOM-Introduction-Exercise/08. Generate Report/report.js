function generateReport() {
    let thElements = document.querySelectorAll('th');
    let trInTbodyElements = document.querySelectorAll('tbody tr');
    let outputElement = document.getElementById('output')
    let infoThElements = [];
    let result = [];
    Array.from(thElements).forEach(th => {
        if (th.children[0].checked) {
            infoThElements.push(th.textContent.toLowerCase().trim());
        } else {
            infoThElements.push(false);
        }
    });
    Array.from(trInTbodyElements).forEach(trEl => {
        let rowObj = {};
        Array.from(trEl.children).forEach((el, i) => {
            if (infoThElements[i]) {
                let currCell = infoThElements[i];
                rowObj[currCell] = el.textContent;
            }
        });
        result.push(rowObj);
    });
    outputElement.textContent = JSON.stringify(result);
}