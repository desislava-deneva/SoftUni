import { render, html } from './node_modules/lit-html/lit-html.js';


export let templeteStudent = (data) => html`
<tr class=${data.match ? 'select' : ''}>
    <td>${data.firstName} ${data.lastName}</td>
    <td>${data.email}</td>
    <td>${data.course}</td>
</tr>
`


// "firstName": "John",
// "lastName": "Dan",
// "email": "john@john-dam.com",
// "course": "JS-CORE",
// "_id": "50537fbe-5d7e-44bf-a90f-69383c3b5bf4"