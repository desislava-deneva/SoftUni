import { html } from "../../node_modules/lit-html/lit-html.js";
import { ifDefined } from "../../node_modules/lit-html/directives/if-defined.js";
import { createItem } from "../utils/dataService.js";

const createTemplate = (item, onSubmit, isError, a, b, c, d, e, f) => html`<div
    class="row space-top"
  >
    <div class="col-md-12">
      <h1>Create New Furniture</h1>
      ${isError
        ? html`<h2><strong>Some fields are not valid!</strong></h2>`
        : html`<p>Please fill all fields.</p>`}
    </div>
  </div>
  <form @submit=${onSubmit}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group ">
          ${a ? html`<p><strong>Make is not valid</strong></p>` : ""}
          <label class="form-control-label" for="new-make">Make</label>
          <input
            class=${"form-control " + (a ? "is-invalid" : "is-valid")}
            id="new-make"
            type="text"
            name="make"
            value=${ifDefined(item.make)}
          />
        </div>
        <div class="form-group has-success">
          ${b ? html` <p><strong>Model is not valid</strong></p>` : ""}
          <label class="form-control-label" for="new-model">Model</label>
          <input
            class=${"form-control " + (b ? "is-invalid" : "is-valid")}
            id="new-model"
            type="text"
            name="model"
            value=${ifDefined(item.model)}
          />
        </div>
        <div class="form-group has-danger">
          ${c ? html` <p><strong>Year is not valid</strong></p>` : ""}
          <label class="form-control-label" for="new-year">Year</label>
          <input
            class=${"form-control " + (c ? "is-invalid" : "is-valid")}
            id="new-year"
            type="number"
            name="year"
            value=${ifDefined(item.year)}
          />
        </div>
        <div class="form-group">
          ${d ? html` <p><strong>Description is not valid</strong></p>` : ""}
          <label class="form-control-label" for="new-description">Description</label>
          <input
            class=${"form-control " + (d ? "is-invalid" : "is-valid")}
            id="new-description"
            type="text"
            name="description"
            value=${ifDefined(item.description)}
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          ${e ? html` <p><strong>Price is not valid</strong></p>` : ""}
          <label class="form-control-label" for="new-price">Price</label>
          <input
            class=${"form-control " + (e ? "is-invalid" : "is-valid")}
            id="new-price"
            type="number"
            name="price"
            value=${ifDefined(item.price)}
          />
        </div>
        <div class="form-group">
          ${f ? html` <p><strong>Image URL is not valid</strong></p>` : ""}
          <label class="form-control-label" for="new-image">Image</label>
          <input
            class=${"form-control " + (f ? "is-invalid" : "is-valid")}
            id="new-image"
            type="text"
            name="img"
            value=${ifDefined(item.img)}
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-material">Material (optional)</label>
          <input
            class="form-control"
            id="new-material"
            type="text"
            name="material"
            value=${ifDefined(item.material)}
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Create" />
      </div>
    </div>
  </form>`;

export function createView(ctx) {
  ctx.render(createTemplate({}, onSubmit, false, true, true, true, true, true, true));

  async function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const make = data.get("make").trim();
    const makeIsValid = make.length < 4;

    const model = data.get("model").trim();
    const modelIsValid = model.length < 4;

    const year = data.get("year").trim();
    const yearIsValid = year < 1950 || year > 2050;

    const description = data.get("description").trim();
    const descriptionIsValid = description.length < 10;

    const price = data.get("price").trim();
    const priceIsValid = Number(price) <= 0;

    const img = data.get("img").trim();
    const imgIsValid = img === "";

    const material = data.get("material").trim();

    const item = { make, model, year, description, price, img };

    if (material !== "") {
      item["material"] = material;
    }

    if (
      [
        makeIsValid,
        modelIsValid,
        yearIsValid,
        descriptionIsValid,
        priceIsValid,
        imgIsValid,
      ].includes(true)
    ) {
      ctx.render(
        createTemplate(
          item,
          onSubmit,
          true,
          makeIsValid,
          modelIsValid,
          yearIsValid,
          descriptionIsValid,
          priceIsValid,
          imgIsValid
        )
      );
      return;
    }

    try {
      let res = await createItem(item);
      if (res === "/login") {
        ctx.page.redirect(res);
        return;
      }
    } catch (err) {
      alert(err);
    }

    ctx.page.redirect("/dashboard");
  }
}
