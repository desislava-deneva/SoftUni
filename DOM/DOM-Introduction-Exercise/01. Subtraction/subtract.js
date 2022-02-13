function subtract() {
    let firstInputEl = document.getElementById('firstNumber');
    let secondInputEl = document.getElementById('secondNumber');

    let result = Number(firstInputEl.value) - Number(secondInputEl.value) 
    
    document.getElementById('result').textContent = result;
}