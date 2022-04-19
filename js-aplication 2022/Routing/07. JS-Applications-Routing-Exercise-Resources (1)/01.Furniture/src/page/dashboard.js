import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFurniture, getUserItems } from "../utils/dataService.js";

const dashboardTemplate = (data, placeHolder, isPersonal) => html`<div class="row space-top">
    <div class="col-md-12">
      ${placeHolder !== undefined && !isPersonal
        ? html` <h1>Welcome to Furniture System</h1> `
        : html` <h1>My Furniture</h1> `}
      ${isPersonal
        ? html`<p>This is a list of your publications.</p>`
        : html`<p>Select furniture from the catalog to view details.</p>`}
    </div>
  </div>
  ${data.length === 0 ? placeHolder : ""}
  <div class="row space-top">${data.map((x) => itemCard(x))}</div>`;

const itemCard = (data) => html` <div class="col-md-4">
  <div class="card text-white bg-primary">
    <div class="card-body">
      <img src="${data.img}" />
      <p>Description here</p>
      <footer>
        <p>Price: <span>${data.price} $</span></p>
      </footer>
      <div>
        <a href="${`/details/${data._id}`}" class="btn btn-info">Details</a>
      </div>
    </div>
  </div>
</div>`;

const placeHolder = html`<div class="col-md-12">
  <strong>
    <h1>There are no items to show here!</h1>
    <a href="/create"><h2>Add the first one!</h2></a>
  </strong>
</div>`;

export async function dashboardView(ctx) {
  const data = await getAllFurniture();

  ctx.render(dashboardTemplate(data, placeHolder, false));
}

export async function myFurnitureView(ctx) {
  const personalData = await getUserItems();

  ctx.render(dashboardTemplate(personalData, placeHolder, true));
}