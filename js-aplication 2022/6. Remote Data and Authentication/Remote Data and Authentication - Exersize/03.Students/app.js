let [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('input');
let tbodyEl = document.querySelector('tbody');

let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', loadStudets);

async function loadStudets(e) {
    e.preventDefault();
    tbodyEl.textContent = '';

    if (firstName.value != '' && lastName.value != '' && facultyNumber != '' && grade.value != '') {
        createStudent(firstName.value, lastName.value, facultyNumber.value, grade.value);
    }
    
    let data = await getStudents();
    data.map(x => createHtmlLine(x.firstName, x.lastName, x.facultyNumber, x.grade));
    [firstName, lastName, facultyNumber, grade].map(x => x.value = '');
}

async function createStudent(firstName, lastName, facultyNumber, grade) {
    return await postStudent({ firstName, lastName, facultyNumber, grade });
}

async function postStudent(data) {
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    let result = await res.json();
    return result;
}

async function getStudents() {
    let url = 'http://localhost:3030/jsonstore/collections/students';
    let res = await fetch(url);
    let data = await res.json();
    return Object.values(data);
}

function createHtmlLine(firstName, lastName, facultyNumber, grade) {
    let tr = document.createElement('tr');
    let tdFName = document.createElement('td');
    tdFName.textContent = `${firstName}`;
    let tdLName = document.createElement('td');
    tdLName.textContent = `${lastName}`;
    let tdFacultyNumber = document.createElement('td');
    tdFacultyNumber.textContent = `${facultyNumber}`;
    let tdGrade = document.createElement('td');
    tdGrade.textContent = `${grade}`;
    [tdFName, tdLName, tdFacultyNumber, tdGrade].forEach(x => tr.appendChild(x))
    tbodyEl.appendChild(tr);
}