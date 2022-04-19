let [name, phone, email] = document.querySelectorAll('input');

btn.addEventListener('click', addPhone)

async function addPhone(ev) {
    ev.preventDefault();
    let arr = [name,value, phone.value, email.value];
    for (const line of arr) {
        let tr = document.querySelector('table tr');
        let td = createElement('td', `${line}`, '', tr);
        
    }
   
    let url = 'http://localhost:3030/jsonstore/phonebook/';

    let data = {
        name: name.value,
        phone: phone.value
    }

    let option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }


    let res = await fetch(url, option);
    let result = res.json();

    return result;
}

function createElement(type, content, attributes = [], appender ) {
    const element = document.createElement(type);
    if (content) {
        element.textContent = content;
    }
    if (attributes.length > 0) {
        element.setAttribute(attributes[0], attributes[1]);
    }
    if (appender) {
        appender.appendChild(element);
    }
    return element;
}
