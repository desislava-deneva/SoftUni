import { html } from "../../node_modules/lit-html/lit-html.js";


import * as data from '../api/data.js';

let templeteLogin = (onLogin) => html`
<section id="login">
    <div class="container">
        <form id="login-form" action="#" method="post" @submit="${onLogin}">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>

`

export async function loginPage(ctx) {
    ctx.render(templeteLogin(onLogin));

    async function onLogin(e) {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));

        if (Object.values(formData).some(x => !x)) {
            alert('Fill all fileds');
            return;
        }

        await data.login(formData.username, formData.password);
        e.target.reset();

        ctx.page.redirect('/catalog')
    }
}

