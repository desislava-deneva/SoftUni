import { deleteItem, getById } from "../api/data.js";
import { detailsTemplete } from "../templetes/details-templete.js";
import {editViews} from '../views/editView.js'

export async function detailsView(ctx) {
    const id = ctx.params.id;

    ctx.render(detailsTemplete(await getById(id), ctx.user ? ctx.user.id : undefined, onEditOrDelete.bind(null, id, ctx)));
}


async function onEditOrDelete(id, ctx, event) {
    event.preventDefault();

    if (event.target.id == 'edit') {
        editViews(ctx)
        
    } else if (event.target.id == 'del') {
        const check = confirm('Are you sure that you want to delete?');
        if (check) {
            await deleteItem(id);
            ctx.page.redirect('/');
        }
    }

}
