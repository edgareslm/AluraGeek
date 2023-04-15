import { renderServices } from "./renderServices.js";
import { services } from "./services.js";
let $products = document.querySelector('.products');

let categories = [];
let products = [];

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

services
    .productList()
        .then(
            function(items){
                let list = new Set();
                items.forEach(item => {
                    list.add(item.category);
                });
                list.forEach(category => {
                    categories.push(category);
                });

                items.forEach(item => {
                    products.push(item);
                });

                renderCategories(list);
        }
        )
    .catch((error) => console.log("ocurrio un error"));

const renderCategories = (array)=>{
    array.forEach(element => {
        let new_list = renderServices.createCategory(element);
        $products.appendChild(new_list);
        renderCard(element);
    });
}
const renderCard = (type)=>{
    let name = type.replace(" ", "_");
    let items = products.filter((product) => product.category == type);
    let max = items.length < number_items ? items.length : number_items;
    for (let i = 0; i < max ; i++) {
        let item = items[i];
        let {id, title, price, image} = item;
        let href = `./screens/details.html?id=`;
        let new_card =renderServices.createCard(id, href, title, price, image);
        let cards = $products.querySelector(`.${name} .category__list`);
        cards.appendChild(new_card);
    }
}

