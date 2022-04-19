import { html, nothing } from "../lib.js";
import { getUserData } from "../utils/util.js";

let userData = getUserData();

export  const detailsTemplete = (album, userId, onEditOrDelete)=> html`
        <!--Details Page-->
        <section id="detailsPage">
            <div class="wrapper">
                <div class="albumCover">
                    <img src="${album.imgUrl}">
                </div>
                <div class="albumInfo">
                    <div class="albumText">

                        <h1>Name: ${album.name}</h1>
                        <h3>Artist: ${album.artist}</h3>
                        <h4>Genre: ${album.genre}</h4>
                        <h4>Price: $${album.price}</h4>
                        <h4>Date: ${album.releaseDate}</h4>
                        <p>Description: ${album.description}</p>
                    </div>

                    <!-- Only for registered user and creator of the album-->
                   
                    ${userId !== undefined && userId !== null && album._ownerId == userId ? 
                    html`<div class="actionBtn" @click= "${onEditOrDelete}">
                        <a href="/edit/${userId}" class="edit">Edit</a>
                        <a href="javascript:void(0)" class="remove">Delete</a>
                    </div>` : nothing}
                    
                </div>
            </div>
        </section>`