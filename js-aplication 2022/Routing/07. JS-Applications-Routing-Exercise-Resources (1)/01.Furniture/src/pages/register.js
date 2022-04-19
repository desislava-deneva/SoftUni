import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../utils/dataService.js";

const regTemplate = (onSubmit, errorMsg, validEmail, validPass, validRepas) => html` <div
    class="row space-top"
  >
    <div class="col-md-12">
      <h1>Register New User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          ${errorMsg
            ? html`<div class="form-group">
                <h1><strong>${errorMsg}</strong></h1>
              </div>`
            : ""}
          <label class="form-control-label" for="email">Email</label>
          <input
            class=${"form-control " + (validEmail ? "is-invalid" : "")}
            id="email"
            type="text"
            name="email"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input
            class=${"form-control " + (validPass ? "is-invalid" : "")}
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="rePass">Repeat</label>
          <input
            class=${"form-control " + (validRepas ? "is-invalid" : "")}
            id="rePass"
            type="password"
            name="rePass"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </div>
    </div>
  </form>`;

export function registerView(ctx) {
  ctx.render(regTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    const email = data.get("email").trim();
    const password = data.get("password").trim();
    const rePass = data.get("rePass").trim();

    if (email === "" || password === "" || rePass === "") {
      return ctx.render(
        regTemplate(
          onSubmit,
          "All fields are required",
          email === "",
          password === "",
          rePass === ""
        )
      );
    }

    if (password !== rePass) {
      return ctx.render(regTemplate(onSubmit, "Passwords do not match", false, true, true));
    }

    try {
      await register(email, password);
    } catch (err) {
      alert(err);
    }
    ctx.page.redirect("/dashboard");
    ctx.setUserNav();
  }
}
