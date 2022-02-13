function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     
    let tdElements = Array.from(document.getElementsByTagName('tr'));
    let textArea = document.getElementById('searchField');

    tdElements.forEach(el => {
       if (el.textContent.toLocaleLowerCase().includes(textArea.value.toLocaleLowerCase())) {
          el.setAttribute('class', 'select' );
       }else{
          el.removeAttribute('class', 'select' );

       }
    });

    textArea.value = '';
   }
}