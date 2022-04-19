import { templeteAllCats } from './templete.js'
import { getCats } from './api.js'
import { render } from './node_modules/lit-html/lit-html.js';

let sectionAllCats = document.getElementById('allCats');

render(templeteAllCats(getCats()), sectionAllCats);

allCats.addEventListener('click', (ev) => {
   toggle(ev)
});

function toggle(ev) {
   let div = ev.target.closest(".info").querySelector(".status");

   ev.target.textContent = ev.target.textContent.includes("Show")
      ? "Hide status code" : "Show status code";
      
   div.style.display = div.style.display === "none" ? "block" : "none";
}
