let userData = null;
window.addEventListener('DOMContentLoaded', () => {
    userData = JSON.parse(sessionStorage.getItem('userData'));

    document.querySelector('span').textContent = userData.email

    if (userData != null) {

        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'inline-block';
        document.querySelector('#addForm .add').disabled = false;

        document.querySelector('.load').addEventListener('click', onLoadData);

    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';

    }

    document.getElementById('logout').addEventListener('click', onLogOut);
    document.getElementById('addForm').addEventListener('click', addCatch);
    document.getElementById('catches').addEventListener('click', deleteCatche)
    document.getElementById('catches').addEventListener('click', updateCatche)

});

async function updateCatche() {
    
}

async function onLoadData() {
    let res = await fetch('http://localhost:3030/data/catches');
    let data = await res.json();
    let catches = document.getElementById('catches');
    catches.innerHTML = '';

    data.forEach(line => catches.appendChild(createDiv(line)));
    return data;
}

async function addCatch(ev) {
    ev.preventDefault();

    if (ev.target.tagName == 'BUTTON') {

        let addForm = document.getElementById('addForm');
        let formData = new FormData(addForm);


        let angler = formData.get('angler');
        let weight = formData.get('weight');
        let species = formData.get('species');
        let location = formData.get('location');
        let bait = formData.get('bait');
        let captureTime = formData.get('captureTime');

        if (![...formData].some(x => x != '')) {
            alert('Input is not filled')
        }


        let data = { angler, weight, species, location, bait, captureTime };
        request(`http://localhost:3030/data/catches`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(data)
        });
        addForm.reset();

        onLoadData();
    }
}

function createDiv(data) {
    let isOwner = userData && data._ownerId === userData.id;
    let div = document.createElement('div');
    div.setAttribute('class', 'catch');

    div.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="${data.angler}" ${!isOwner ? 'disabled' : ''}>
    <label>Weight</label>
    <input type="text" class="weight" value="${data.weight}"  ${!isOwner ? 'disabled' : ''}>
    <label>Species</label>
    <input type="text" class="species" value="${data.species}"  ${!isOwner ? 'disabled' : ''}>
    <label>Location</label>
    <input type="text" class="location" value="${data.location}"  ${!isOwner ? 'disabled' : ''}>
    <label>Bait</label>
    <input type="text" class="bait" value="${data.bait}"  ${!isOwner ? 'disabled' : ''}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${data.captureTime}"  ${!isOwner ? 'disabled' : ''}>
    <button class="update" id="${data._id}"  ${!isOwner ? 'disabled' : ''}>Update</button>
    <button class="delete" id="${data._id}"  ${!isOwner ? 'disabled' : ''}>Delete</button>`

    return div
}

async function deleteCatche(ev) {
    let id = ev.target.id;

    await request(`http://localhost:3030/data/catches/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': userData.token,
        },
    });

    onLoadData();
}

async function onLogOut(ev) {
    ev.preventDefault();
    let token = sessionStorage.getItem('userData');

    sessionStorage.removeItem('userData', JSON.stringify(token));
    window.location = 'index.html';
}

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok != true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        alert(error.message)
    }
}