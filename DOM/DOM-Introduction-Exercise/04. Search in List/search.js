function search() {
   let liElements = document.getElementsByTagName('li');
   let textArea = document.getElementsByTagName('input')[0];

   let machesFount = 0;
   for (const el of liElements) {
      if ((el.textContent).toLocaleLowerCase().includes(textArea.value.toLocaleLowerCase())) {
         el.style.textDecoration = 'underline';
         el.style.fontWeight = 'bold';
         machesFount++;
      } else {
         el.style.textDecoration = '';
         el.style.fontWeight = '';
      }
   }
   textArea.value = '';
   document.getElementById('result').textContent = `${machesFount} matches found`;

}
