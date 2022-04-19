import { getUserData } from "../utils/util.js";

const guest = document.querySelector("#guest");
const user = document.querySelector("#user");
const span = user.querySelector("span");

export function updateNav(ctx, next) {
    const userData = getUserData();
    if(userData){
        span.textContent = `Welcome, ${userData.email}`;
        guest.style.display = "none";
        user.style.display = "inline-block";
    } else {
        user.style.display = "none";
        guest.style.display = "inline-block";
    }
    next();
}