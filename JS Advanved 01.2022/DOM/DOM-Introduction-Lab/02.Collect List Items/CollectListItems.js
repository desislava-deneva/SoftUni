function extractText() {
    let liElements = Array.from(document.getElementsByTagName('li'));
    console.log(liElements);
   let textArea =  document.getElementById('result');

   for (const el of liElements) {
    textArea.value +=  el.textContent+ '\n'
   }
}