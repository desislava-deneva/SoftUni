
let formEl = document.querySelector('form');
formEl.addEventListener('submit', onSubmit)

function onSubmit(ev) {
    ev.preventDefault();

    let data = new FormData(formEl);
    let firstName = data.get('fname');
    let lastName = data.get('lname');
    let phone = data.get('phone');

    let record = {
        firstName, lastName, phone
    }

    formEl.reset();

    console.log(record);
}
//get post new data
async function postData(data) {
    let url = 'http://localhost:3030/jsonstore/phonebook/';

    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }

    try {
        let res = await fetch(url, options);
        if (res.ok != true) {
            let error = await res.json();
            throw new Error(error.message)
        }
        let result = await res.json();
        return result;
    } catch (error) {
        alert(error.message)
    }
}
//get all data
async function getData() {
    let url = 'http://localhost:3030/jsonstore/phonebook/';

    let option = { headers: {} };

    const token = sessionStorage.getItem('token');
    if (token !== null) {
        option.headers['X-Authorization'] = token;
    }
    let res = await fetch(url, option);
    let data = await res.json();

    return data;
}
//get data by id
async function getDataById(id) {
    let url = 'http://localhost:3030/jsonstore/phonebook/' + id;

    let res = await fetch(url);
    let data = await res.json();

    return data;
}
//updateData by id and obj
async function updateData(id, data) {
    let url = 'http://localhost:3030/jsonstore/phonebook/' + id;

    let options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }

    let res = await fetch(url, options);
    let result = await res.json();

    return result;
}
//delete data by id
async function deleteData(id) {
    let url = 'http://localhost:3030/jsonstore/phonebook/' + id;

    let options = {
        method: 'delete',
    }

    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}