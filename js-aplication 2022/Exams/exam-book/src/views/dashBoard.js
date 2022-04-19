import { getAll } from "../api/data.js";
import { dashboardTemplate } from "../templates/dashboard-template.js";

export async function dashBoard(ctx) {
    ctx.render(dashboardTemplate(await getAll()));
}

