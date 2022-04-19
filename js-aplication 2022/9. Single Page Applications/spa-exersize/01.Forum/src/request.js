
async function request(url, options) {
    const response = await fetch(url, options);

    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

// function to load all books from server and display them
export async function getAll() {
     let comments = await request('http://localhost:3030/jsonstore/collections/myboard/posts');
     
   const rows = Object.entries(books).map(createRow).join('');
    document.querySelector('main').innerHTML = rows;
}

function createRow(params) {
    
}

// function for creating a new book
// async function createBook(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const book = {
//         title: formData.get('title'),
//         author: formData.get('author')
//     };

//     if (book.title == '' || book.author == '') {
//         return alert('All fields are required!');
//     }

//     await request('http://localhost:3030/jsonstore/collections/books', {
//         method: 'post',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(book)
//     });

//     event.target.reset();
// }

// // function for updating an existing book using ID
// async function updateBook(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const id = formData.get('id');
//     const book = {
//         title: formData.get('title'),
//         author: formData.get('author')
//     };

//     if (book.title == '' || book.author == '') {
//         return alert('All fields are required!');
//     }

//     await request('http://localhost:3030/jsonstore/collections/books/' + id, {
//         method: 'put',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(book)
//     });

//     document.getElementById('createForm').style.display = 'block';
//     document.getElementById('editForm').style.display = 'none';
//     event.target.reset();
// }

// // function for deleting an existing book using ID
// async function requestDelete(id) {
//     await request('http://localhost:3030/jsonstore/collections/books/' + id, {
//         method: 'delete',
//     });
// }
