// function create(words) {

//    let contentHtml = document.getElementById('content')


//    words.forEach(content => {
//    let divEl = document.createElement('div')
//      let paraEl =  createElement('p');
//      paraEl.textContent = content;
//      divEl.appendChild(paraEl);

//      contentHtml.appendChild(divEl)
      
//    });

   

// }

function create(words) {
   for (let word of words) {
       let div = document.createElement('div');
       let paragraph = document.createElement('p');
       paragraph.textContent = word;
       paragraph.style.display = 'none';
       div.appendChild(paragraph);
       div.addEventListener('click', function() {
           paragraph.style.display = 'block';
       })

       let contentDiv = document.getElementById('content');
       contentDiv.appendChild(div);
   }
}
