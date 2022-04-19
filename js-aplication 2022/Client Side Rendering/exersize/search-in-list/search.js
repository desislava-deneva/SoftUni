import { templeteTowns } from './template.js'
import { towns } from './towns.js'
import { render } from './node_modules/lit-html/lit-html.js'

let townsUlEL = document.getElementById('towns');
render(templeteTowns(towns), townsUlEL);

let liElenents = document.querySelectorAll('li');
let result = document.getElementById('result')


function search() {
   let button = document.querySelector('button');
   button.addEventListener('click', onClick)
}

function onClick(ev) {
   let matches = 0;
   let input = document.getElementById('searchText');
   let value = input.value.toLowerCase();

   Array.from(liElenents).map(x => {
      if (x.textContent.toLowerCase().includes(value) && value != '') {
         x.className = 'active';
         matches++;
         result.textContent = `${matches} matches found`;
      } else {
         x.className = ''
      }
   });
}

search();
