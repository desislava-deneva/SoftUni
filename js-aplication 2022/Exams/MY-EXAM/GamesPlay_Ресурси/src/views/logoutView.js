import { logout as onLogout } from "../api/api.js";
export async function logoutView (ctx) {
    await onLogout();
    ctx.page.redirect("/");
}