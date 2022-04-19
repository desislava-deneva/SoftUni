
let host = 'http://localhost:3030/jsonstore/collections'
async function request(url, method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data);
    }

    const res = await fetch(host + url, options)

    if (res.ok == false) {
        const error = await res.json()
        alert(error.message)
        throw new Error(error.message)
    }

    let result = await res.json()
    return result;
}


export function getBooks() {
    return request('/books')
}

export function getBookById(id) {
    return request('/books' + id)
}

export function createBook(book) {
    return request('/books', 'post', book)
}

export function updateBook(id, book) {
    return request('/books' + id, 'put', book)
}

export function deleteBook(id) {
    return request('/books' + id, 'delete')
}