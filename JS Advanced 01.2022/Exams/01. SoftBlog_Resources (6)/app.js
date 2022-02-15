function solve() {
   let [section, sectionPost, sectionInputs, sectionArhive] = document.querySelectorAll('section');

   let [author, titile, category] = sectionInputs.querySelectorAll('body input');
   let content = sectionInputs.querySelector('textarea');
   let btnCreate = sectionInputs.querySelector('button');

   sectionPost.addEventListener('click', onClick);
   btnCreate.addEventListener('click', onCreate);

   function onCreate(ev) {
      ev.preventDefault();

      let article = createElement('article', '', '', sectionPost);
      createElement('h1', `${titile.value}`, '', article);

      let p = createElement('p', 'Category:', '', article);
      createElement('strong', `${category.value}`, '', p);

      let p2 = createElement('p', 'Creator:', '', article);
      createElement('strong', `${author.value}`, '', p2);

      createElement('p', `${content.value}`, '', article);

      let div = createElement('div', '', 'buttons', article)
      createElement('button', 'Delete', 'btn delete', div);
      createElement('button', 'Archive', 'btn archive', div);

      author.value = '';
      titile.value = '';
      category.value = '';
      content.value = '';
   }

   function onClick(ev) {
      ev.preventDefault();
      let currEvent = ev.target.textContent;

      if (currEvent == 'Archive') {
         let olElement = sectionArhive.querySelector('ol');

         let articleEl = ev.target.parentElement.parentElement;
         let h1 = articleEl.querySelector('h1');

         createElement('li', `${h1.textContent}`, '', olElement);
         let liElemets = Array.from(olElement.querySelectorAll('li'));

         liElemets.sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach((li) => olElement.appendChild(li));

         ev.target.parentElement.parentElement.remove()

      } else if (currEvent == 'Delete') {
         ev.target.parentElement.parentElement.remove();
      }
   }

   function createElement(type, content, attribute, appender) {
      const el = document.createElement(type);
      if (attribute) {
         el.setAttribute('class', attribute);
         el.textContent = content;
      } else if (content) {
         el.textContent = content;
      }
      if (appender) {
         appender.appendChild(el);
      }
      return el;
   }
}

