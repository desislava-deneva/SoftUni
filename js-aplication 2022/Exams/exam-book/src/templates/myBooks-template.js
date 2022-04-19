import { html } from "../lib.js";

export const myBooksTemplate = (books) => html`
    <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <ul class="my-books-list">
                ${  books.length  
                    ? books.map(book => html`
                        <li class="otherBooks">
                            <h3>${book.title}</h3>
                            <p>Type: ${book.type}</p>
                            <p class="img"><img src="${book.imageUrl}"></p>
                            <a class="button" href="/details/${book._id}">Details</a>
                        </li>`)
                    : html`<p class="no-books"> No books in database! </p>`
                }
            </ul>
    </section>

`;