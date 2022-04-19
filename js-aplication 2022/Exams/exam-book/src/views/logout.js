import { logout as onLogout } from "../api/api.js";
export async function logout (ctx) {
    await onLogout();
    ctx.page.redirect("/");
}