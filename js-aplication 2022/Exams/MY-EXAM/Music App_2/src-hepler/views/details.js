import { deleteItem, getById } from "../api/data.js";
import { detailsTemplate } from "../templates/details-template.js";


export async function details(ctx) {
    const id = ctx.params.id;
    ctx.render(detailsTemplate(await getById(id), ctx.user ? ctx.user.id : undefined, onDelete.bind(null, id, ctx)));

    
}
async function onDelete (id, ctx, event) {
    event.preventDefault();
    const check = confirm('Are you sure that you want to delete this book?');
    if(check){
        await deleteItem(id);
        ctx.page.redirect('/');
    }
}