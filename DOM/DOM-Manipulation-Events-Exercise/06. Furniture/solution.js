function solve() {

  let [input, output] = document.querySelectorAll('textarea');
  let [genereteBtn, buyBtn] = document.querySelectorAll('button');
  let tbody = document.querySelector('tbody');

  genereteBtn.addEventListener('click', addCapital);
  buyBtn.addEventListener('click', buy)

  function addCapital(ev) {
    let inObject = JSON.parse(input.value);

    for (const el of inObject) {
      let tr = document.createElement('tr');

      let td = document.createElement('td');
      let img = createElement('img', undefined, undefined, td);
      img.setAttribute('src', `${el.img}`)
      tr.appendChild(td);

      let td2 = document.createElement('td');
      createElement('p', `${el.name}`, undefined, td2)
      tr.appendChild(td2);

      let td3 = document.createElement('td');
      createElement('p', `${el.price}`, undefined, td3)
      tr.appendChild(td3);


      let td4 = document.createElement('td');
      createElement('p', `${el.decFactor}`, undefined, td4)
      tr.appendChild(td4);

      let td5 = document.createElement('td');

      let input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.disabled = false;
      td5.appendChild(input);
      tr.appendChild(td5);

      tbody.appendChild(tr);
    }
  }

  function buy(ev) {
    let products = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(p => p.parentElement.parentElement)
      .map(r => (
        {
          name: r.children[1].textContent,
          price: Number(r.children[2].textContent),
          decFactor: Number(r.children[3].textContent)
        }
      ));

    let names = [];
    let total = 0;
    let decFactor = 0


    for (const product of products) {
      names.push(product.name);
      total += product.price;
      decFactor += product.decFactor;
    }

    output.value =`Bought furniture: ${names.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${decFactor / products.length}`


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