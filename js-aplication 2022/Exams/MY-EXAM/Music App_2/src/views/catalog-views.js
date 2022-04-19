import { getAll } from "../api/data.js";
import { catalogsTempletes } from "../templetes/catalog-templete.js";
import { getUserData } from "../utils/util.js";

export async function catalogViews(ctx) {
    let isAuth = getUserData();
    ctx.render(catalogsTempletes(await getAll(), isAuth));
}