import { html, nothing } from "../lib.js";
import { getUserData } from "../utils/util.js";

let userData = getUserData();

// const isAutentication = userId !== undefined && userId !== null && game._ownerId == userId;

export const detailsTemplete = (game, userId, onEditOrDelete) => html`
<!--Details Page-->
<section id="game-details">
       <h1>Game Details</h1>
       <div class="info-section">

              <div class="game-header">
                     <img class="game-img" src="${game.imageUrl}" />
                     <h1>Bright</h1>
                     <span class="levels">MaxLevel: ${game.maxLevel}</span>
                     <p class="type">${game.category}</p>
              </div>

              <p class="text">
                     ${game.summary}
              </p>

              <!-- Bonus ( for Guests and Users ) -->
              <!-- <div class="details-comments">
                     <h2>Comments:</h2>
                     <ul> -->
                            <!-- list all comments for current game (If any) -->
                            <!-- <li class="comment">
                                   <p>Content: I rate this one quite highly.</p>
                            </li>
                            <li class="comment">
                                   <p>Content: The best game.</p>
                            </li>
                     </ul> -->
                     <!-- Display paragraph: If there are no games in the database -->
                     <!-- <p class="no-comment">No comments.</p> -->
              <!-- </div> -->

              <!-- Edit/Delete buttons ( Only for creator of this game )  -->
              ${userId !== undefined && userId !== null && game._ownerId == userId
              ? html`<div class="buttons" @click = "${onEditOrDelete}">
                     <a href="/edit/${userId}" class="button" id = "edit">Edit</a>
                     <a href="javascript:void(0)" class="button" id ="del">Delete</a>
              </div>`
              : nothing}
              
       </div>

       <!-- Bonus -->
       <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
       <!-- <article class="create-comment">
              <label>Add new comment:</label>
              <form class="form">
                     <textarea name="comment" placeholder="Comment......"></textarea>
                     <input class="btn submit" type="submit" value="Add Comment">
              </form>
       </article> -->

</section>`