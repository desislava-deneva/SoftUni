import { html, nothing } from "../../node_modules/lit-html/lit-html.js";

import {getById, delItem} from '../api/data.js';

import { getUserData } from "../helper.js";

// {
        //     "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        //     "title": "Pretty Woman - The Musical",
        //     "date": "March 13, 2018",
        //     "author": "J. F. Lawton, Garry Marshall",
        //     "imageUrl": "/images/Pretty-Woman.jpg",
        //     "description": "Pretty Woman: The Musical is a musical with music and lyrics by Bryan Adams and Jim Vallance, and a book by Garry Marshall and J. F. Lawton. The musical is based on the 1990 film of the same name written by Lawton and directed by Marshall.",
        //     "_createdOn": 1617194128618,
        //     "_id": "ff436770-76c5-40e2-b231-77409eda7a61"
        // }

let templeteDetails = (isOwner, item, user, onDelete) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${item.title}</h1>
            <div>
                <img src="${item.imageUrl}" />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${item.description}</p>
            <h4>Date: ${item.date}</h4>
            <h4>Author: ${item.author}</h4>
            ${isOwner && user ? 
            html`<div class="buttons">
                <a class="btn-delete" href="javascript:void(0)" @click=${onDelete}>Delete</a>
                <a class="btn-edit" href="/edit/${item._id}">Edit</a>
                <a class="btn-like" href="#">Like</a>
            </div>`
            : nothing}
            
            <p class="likes">Likes: 0</p>
        </div>
    </div>
</section>

`


export async function detailsPage(ctx) {
    let itemId = ctx.params.id;
    let item = await getById(itemId);
    let user = await getUserData();
    let isOwner = ctx.user && user.id == item._ownerId ? true : false
    ctx.render(templeteDetails(isOwner, item, user, onDelete));

     async function onDelete(e) {
        e.preventDefault()
        let choise = confirm('Are you sure want to del?');

        if (choise) {
            await delItem(itemId);
            ctx.page.redirect('/')
        }

    }
}