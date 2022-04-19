import { html } from "../../node_modules/lit-html/lit-html.js";

// import { editById, getById } from '../api/data.js'

let templeteComments = (comments) => html`

`

function commentsView(ctx) {
    ctx.render(templeteComments())
}