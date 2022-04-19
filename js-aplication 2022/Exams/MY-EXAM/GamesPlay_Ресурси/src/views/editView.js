import { getById } from "../api/data.js";
import { editTemlete } from "../templetes/edit-templete.js";
import { editItem } from "../api/data.js";

export async function editViews (ctx) {
    const id = ctx.params.id;
    ctx.render(editTemlete(await getById(id), onSubmit.bind(null, id, ctx)));
}

async function onSubmit(id, ctx, event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let dataObject = Object.fromEntries(formData);

    if(Object.values(dataObject).every(x => x)){
        await editItem(id, dataObject);
        ctx.page.redirect(`/details`);
    }
    else {
       
        alert("All fields are required!");
        return
    }

}