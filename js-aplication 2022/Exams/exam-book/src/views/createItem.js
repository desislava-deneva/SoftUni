import { create } from "../api/data.js";
import { createItemTemplate } from "../templates/createItem-template.js";

export function createItem (ctx) {
    
    ctx.render(createItemTemplate(onSubmit.bind(null, ctx)));
}

async function onSubmit(ctx, event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let dataObject = Object.fromEntries(formData);
    
    if(Object.values(dataObject).every(x => x) && ctx.user) {
        await create(dataObject);
        ctx.page.redirect("/");
    } else {
        alert("All fields are required!");
    }

}