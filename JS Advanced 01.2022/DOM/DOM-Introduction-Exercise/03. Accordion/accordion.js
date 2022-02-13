function toggle() {
   
   let divElButton = document.querySelector('.button');

   let textMore = document.getElementById('extra');

   divElButton.textContent = divElButton.textContent == 'Less'? divElButton.textContent ='More':divElButton.textContent ='Less';
   textMore.style.display = textMore.style.display == 'none'|| textMore.style.display == ' ' ?
   textMore.style.display = 'block': textMore.style.display = 'none';
   
}