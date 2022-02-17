function solve() {
    let fromAddProduct = document.getElementById('add-new');

    let [name, quantity, price] = fromAddProduct.querySelectorAll('input');
    let addBtn = fromAddProduct.querySelector('button');

    let ulProducts = document.querySelector('#products ul');
    let filterButton = document.querySelector('.filter button');
    let ulMyProducts = document.querySelector('#myProducts ul');
    let byButton = document.querySelector('#myProducts button');

    let obj = {};
    let total = 0;

    addBtn.addEventListener('click', (ev) => {
        ev.preventDefault();

        if (name.value == '' || quantity.value == '' || price.value == '') {
            return;
        }

        quantity.value = Number(quantity.value);
        price.value = Number(price.value).toFixed(2);

        // if (typeof quantity.value != 'number' || typeof price.value != 'number') {
           
        //     return;
        // }

        obj[name.value] = quantity.value;

        let li = createElement('li', '', '', ulProducts);
        createElement('span', `${name.value}`, '', li)
        createElement('strong', `Available: ${quantity.value}`, '', li);

        let div = createElement('div', '', '', li);
        createElement('strong', `${price.value}`, '', div)
        createElement('button', `Add to Client's List`, '', div);

        name.value = '';
        quantity.value = '';
        price.value = '';
    })

    filterButton.addEventListener('click', (ev) => {
        ev.preventDefault();

        let filterInput = document.querySelector('.filter input');
        let liProductsElements = Array.from(document.querySelectorAll('#products ul li'));

        for (const liProduct of liProductsElements) {
            let spanProductName = liProduct.querySelector('span').textContent.toLocaleLowerCase();
            if (!spanProductName.includes(filterInput.value.toLowerCase())) {
                liProduct.style.display = 'none';
            } else {
                liProduct.style.display = '';
            }
        }
    })

    ulProducts.addEventListener('click', (ev) => {
        ev.preventDefault();

        let liEl = ev.target.parentElement.parentElement;
        let spanEl = liEl.querySelector('span');
        let strongEl = liEl.querySelector('strong');
        let strongPrice = liEl.querySelector('div strong');
        let totalPrice = document.querySelectorAll('h1')[1];

        if (obj[spanEl.textContent] > 0) {
            obj[spanEl.textContent] -= 1;

            strongEl.textContent = `Available: ${obj[spanEl.textContent]}`;

            let li = createElement('li', `${spanEl.textContent}`, '', ulMyProducts);
            createElement('strong', `${strongPrice.textContent}`, '', li);

            total += Number(strongPrice.textContent);
            totalPrice.textContent = `Total Price: ${total.toFixed(2)}`

            if (obj[spanEl.textContent] == 0) {
                liEl.remove();
            }
        }
    });

    byButton.addEventListener('click', (ev) => {
        ev.preventDefault();

        ulMyProducts.innerHTML = '';
    })

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