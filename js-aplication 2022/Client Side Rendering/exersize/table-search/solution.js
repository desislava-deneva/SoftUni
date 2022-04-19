import { render } from './node_modules/lit-html/lit-html.js';
import { templeteStudent } from './templete.js'
import { getAllData } from './api.js'

let studentsData = await getAllData();
let tbody = document.querySelector('tbody');
let searchField = document.getElementById('searchField');

render(studentsData.map(x => templeteStudent(x)), tbody);

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      studentsData.map(x => x.match = false);
      let inputValue = searchField.value.toLowerCase()

      for (const student of studentsData) {
         
        student.match = Object.values(student).some(x => x.toString().toLowerCase().includes(inputValue))
      }
      render(studentsData.map(x => templeteStudent(x)), tbody);
      searchField.value = '';
   }
}

solve()