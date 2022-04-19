import { html } from "../../node_modules/lit-html/lit-html.js";
import { getSpecific, delItem } from "../utils/dataService.js";

const detailsTemplate = (item, del, isOwner) => html`<div class="row space-top">
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>
  <div class="row space-top">
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src=${item.img} />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <p>Make: <span>${item.make}</span></p>
      <p>Model: <span>${item.model}</span></p>
      <p>Year: <span>${item.year}</span></p>
      <p>Description: <span>${item.description}</span></p>
      <p>Price: <span>${item.price}</span></p>
      <p>Material: <span>${item.material}</span></p>
      ${isOwner
        ? html` <div>
            <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
            <a href="javascript:void(0)" class="btn btn-red" @click=${del}>Delete</a>
          </div>`
        : ""}
    </div>
  </div>`;

export async function detailsView(ctx) {
  let item;
  try {
    item = await getSpecific(ctx.params.id);
  } catch (err) {
    alert(err);
  }

  ctx.render(detailsTemplate(item, onDel, item._ownerId === localStorage.getItem("userId")));

  async function onDel() {
    if (confirm(`Are you sure that you want to delete this ${item.make}?`)) {
      await delItem(item._id);
      ctx.page.redirect("/dashboard");
    }
  }
}
