import { html } from "../../node_modules/lit-html/lit-html.js";


import { register } from '../api/data.js'


let templeteRegister = (onRegister) => html`
<section id="register">
    <div class="container">
        <form id="register-form" @submit="${onRegister}">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>

`


export function registerPage(ctx) {
    ctx.render(templeteRegister(onRegister));

    async function onRegister(e) {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => !x)) {
            alert('Please, fill all fieled');
            return;
        }

        if (formData.password != formData['repeatPass']) {
            alert('password confirm is not same');
            return
        }

        e.target.reset();

        await register(formData.username, formData.password);
        ctx.page.redirect('/catalog');
    }
}