import { deleteItem, getById } from "../api/data.js";
import { detailsTemplete } from "../templetes/details-templete.js";
import {editViews} from '../views/editView.js'

export async function detailsView(ctx) {
    const id = ctx.params.id;

    ctx.render(detailsTemplete(await getById(id), ctx.user ? ctx.user.id : undefined, onEditOrDelete.bind(null, id, ctx)));
}


async function onEditOrDelete(id, ctx, event) {
    event.preventDefault();

    console.log(event.target.className);
    if (event.target.className == 'edit') {
        editViews(ctx)
        
    } else if (event.target.className == 'remove') {
        const check = confirm('Are you sure that you want to delete this album?');
        if (check) {
            await deleteItem(id);
            ctx.page.redirect('/');
        }
    }

}
