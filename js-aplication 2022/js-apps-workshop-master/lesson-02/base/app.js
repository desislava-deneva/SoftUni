window.addEventListener('DOMContentLoaded', async () => {
   let mainEl = document.querySelector('main');

   mainEl.innerHTML = '';
   let arr = await Promise.all([
      makeRequest(`http://localhost:3030/jsonstore/cookbook/details/01`),
      makeRequest(`http://localhost:3030/jsonstore/cookbook/details/02`),
      makeRequest(`http://localhost:3030/jsonstore/cookbook/details/03`),
      makeRequest('http://localhost:3030/jsonstore/cookbook/recipes')
   ]);

   Object.values(arr[3]).forEach((line) => {
      makePrevew(line);
   });

   showRecipeInfo();

   function showRecipeInfo() {
      mainEl.addEventListener('click', (ev) => {
         let recipeName = ev.target.querySelector('h2').textContent;
         let searchRecipe = Object.values(arr).find(r => r.name == recipeName);

         let article = ev.target;
         article.className = '';
         let info = getInfoRecipe(searchRecipe);
         article.innerHTML = info;
      });
   }

   function getInfoRecipe(recipe) {
      let liElements = '';
      let info = '';
      Object.values(recipe.ingredients).forEach(el => liElements += `<li>${el}</li>`);
      info = `
      <h2>${recipe.name}</h2>
      <div class="band">
          <div class="thumb">
              <img src=${recipe.img}>
          </div>
          <div class="ingredients">
              <h3>Ingredients:</h3>
              <ul>${liElements}</ul>
          </div>
      </div>
      <div class="description">
          <h3>Preparation:</h3>
          <p>${recipe.steps[0]}</p>
          <p>${recipe.steps[1]}</p>
          <p>${recipe.steps[2]}</p>
      </div>`;
      return info;
   }

   function makePrevew(data) {
      return mainEl.innerHTML += `<article class="preview">
      <div class="title">
          <h2>${data.name}</h2>
      </div>
      <div class="small">
          <img src=${data.img}>
      </div>
  </article>`;
   }

   async function makeRequest(url) {
      try {
         let response = await fetch(url);
         if (response.status != 200) {
            throw new Error(response.status);
         }
         return response.json();
      } catch (error) {
         return console.log(error);
      }
   }
});