import { services } from "./services.js";
import { renderServices } from "./renderServices.js";

const $details = document.querySelector(".products")

const url = new URL(window.location);
const id_url = url.searchParams.get("id");


let number_items;

const viewport = ()=> window.innerWidth;
window.onresize=()=>screenWidth();

screenWidth();

function screenWidth(){
    if(viewport() > 980){
        number_items = 6;
    }else if(viewport() > 480 && viewport() < 980 ){
        number_items = 4;
    }else{
        number_items = 4;
    }
    console.log(number_items);
}



function createSimilar(){
    const list = document.createElement('div');
    list.classList.add('details-list');
    const content = /** html */ `
        <div class="category__banner">
            <h2 class="category__name">Productos similares</h2>
        </div>
        <div class="category__list"></div>
    `;

    list.innerHTML=content;
    return list;
}

let similar = []


services
    .gettList()
        .then(
            function(items){
                let product = items.filter((item) => item.id == id_url);
                let {id, title, price, image,category} = product[0];
                let details = renderServices.createDetail(id, title, price, image);
                $details.appendChild(details);
                $details.appendChild(createSimilar());

                items.forEach(element => {
                    if(element.category=category){
                        similar.push(element);
                    }
                });

                let rdom = ()=> Math.round(Math.random() * similar.length);
                let $list = document.querySelector(".category__list")
                for (let i = 0; i < number_items; i++) {
                    let item = similar[rdom()];
                    let {id, title, price, image} = item;
                    let src = `.${image}`
                    let href = `../screens/details.html?id=`;
                    let new_card =renderServices.createCard(id, href, title, price, src);
                    $list.appendChild(new_card);
                }

            }
        )
    .catch((error) => console.log("ocurrio un error"));