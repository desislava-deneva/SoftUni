import { html } from "lit-html";
import { login } from "./dataService.js.js";

const loginTemplate = (handler, errMessage, emailIsEmpty, passIsEmpty) => html`<div
    class="row space-top"
  >
    <div class="col-md-12">
      <h1>Login User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${handler}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          ${errMessage
            ? html`<div class="form-group">
                <h1><strong>${errMessage}</strong></h1>
              </div>`
            : ""}
          <label class="form-control-label" for="email">Email</label>
          <input
            class=${"form-control " + (emailIsEmpty ? "is-invalid" : "")}
            id="email"
            type="text"
            name="email"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input
            class=${"form-control " + (passIsEmpty ? "is-invalid" : "")}
            id="password"
            type="password"
            name="password"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </div>
    </div>
  </form>`;

export function loginView(ctx) {
  ctx.render(loginTemplate(formHandler));

  async function formHandler(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const password = data.get("password").trim();
    const email = data.get("email").trim();

    if (email === "" || password === "") {
      return ctx.render(
        loginTemplate(formHandler, "All fields are required", email === "", password === "")
      );
    }

    try {
      await login(email, password);
    } catch (err) {
      return ctx.render(loginTemplate(formHandler, "Login or password don't match", true, true));
    }

    ctx.page.redirect("/dashboard");
    ctx.setUserNav();
  }
}
