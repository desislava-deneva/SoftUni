import { html, nothing } from "../lib.js";

export const detailsTemplate = (book, userId, onDelete) => html `
    <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src="${book.imageUrl}"></p>
                <div class="actions">
                    ${userId !== undefined && userId !== null && book._ownerId == userId 
                        ? html`<a class="button" href="/edit/${book._id}" >Edit</a>
                               <a class="button" href="javascript:void(0)" @click="${onDelete}">Delete</a>`
                        : nothing 
                    }
                    ${userId !== undefined && userId !== null && userId !== book._ownerId 
                        ? html`<a class="button" href="/like">Like</a>`
                        : nothing
                    }
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div>
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>
`;