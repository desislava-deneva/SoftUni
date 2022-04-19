function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate)
    ul.addEventListener('click', onDelete);
}

let ul = document.getElementById('phonebook');

async function onLoad() {
    let url = 'http://localhost:3030/jsonstore/phonebook';
    let res = await fetch(url);
    let data = await res.json();
    ul.replaceChildren();
    let phonebook = Object.values(data);
    phonebook.map(p => {
        ul.appendChild(createPhoneHtml(p))
    });
}

function createPhoneHtml(data) {
    let li = document.createElement('li');
    li.textContent = `${data.person}: ${data.phone}`;
    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Delete';
    buttonDelete.id = data._id;
    li.appendChild(buttonDelete)
    return li;
}

async function deletePhone(ev) {
    let id = ev.target.id;
    let url = 'http://localhost:3030/jsonstore/phonebook/' + id;
    let res = await fetch(url, {
        method: 'delete'
    });

    let data = await res.json();
    return data;
}

async function onDelete(ev) {
    let id = ev.target.id;
    
    if (id!= undefined) {
        await deletePhone(ev);
        ev.target.parentElement.remove();
    }
}
async function createContact(contact) {
    let url = 'http://localhost:3030/jsonstore/phonebook';
    let res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });

    let result = await res.json();
    return result;
}

async function onCreate() {
    let person = document.getElementById('person').value;
    let phone = document.getElementById('phone').value;
    let result =  await createContact({ person, phone });
    ul.appendChild(createPhoneHtml(result))
}

attachEvents();