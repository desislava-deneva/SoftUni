import { getAll } from "../api/data.js";
import { catalogsTempletes } from "../templetes/catalog-templete.js";

export async function catalogViews(ctx) {
    ctx.render(catalogsTempletes(await getAll()));
}