function calc() {
    let firstNm = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let sum = document.getElementById('sum');

    sum.value = Number(firstNm.value)+Number(secondNum.value);
}
