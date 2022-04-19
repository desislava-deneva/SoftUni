import { html, nothing } from '../../node_modules/lit-html/lit-html.js'
import * as dataService from '../api/data.js';
import { getUserData } from "../helper.js";

// {
//     "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
//     "name": "Max",
//     "breed": "Shiba Inu",
//     "age": "2 years",
//     "weight": "5kg",
//     "image": "../images/Shiba-Inu.png",
//     "_createdOn": 1617194128618,
//     "_id": "ff436770-76c5-40e2-b231-77409eda7a61"
// }

let templeteDetails = (isOwner, pet, user, onDelete, onDonate,getTotalDonate ) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${pet.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${getTotalDonate}00$</h4>
            </div>
            <!-- if there is no registered user, do not display div-->
            ${user 

            ? html`<div class="actionBtn">
          <!-- Only for registered user and creator of the pets-->
           ${user && isOwner ? 
          html`<a href="/edit/${pet._id}" class="edit">Edit</a>
          <a href="javascript:void(0)" class="remove" @click="${onDelete}">Delete</a>` 
          : null}
    
    <!--(Bonus Part) Only for no creator and user-->
    ${!isOwner && user ? html`<a href="javascript:void(0)" class="donate" @click="${onDonate}">Donate</a>` : null}
    
</div>` : nothing}
        </div>
    </div>
</section>
`
let context;
export async function detailsPage(ctx) {
    context = ctx;
    let petId = ctx.params.id;
    let pet = await dataService.getById(petId);
    let user = await getUserData();
    let getTotalDonate = await dataService.totalDonation(petId);

    let isOwner = ctx.user && user.id == pet._ownerId ? true : false;

    ctx.render(templeteDetails(isOwner, pet, user, onDelete, onDonate, getTotalDonate));

    async function onDonate() {
        document.querySelector('.donate').style.display = 'none';

        let donate = Number(getTotalDonate);
        getTotalDonate =  donate+=100;
          await dataService.postDonation({petId,donate });
       
          context.page.redirect(`/details/${pet._id}`)


    }

    async function onDelete(e) {
        e.preventDefault()
        let choise = confirm('Are you sure want to del this pet?');

        if (choise) {
            await dataService.delItem(petId);
            ctx.page.redirect('/')
        }

    }
}