function createCard(id,href,title,price,image){
    const card = document.createElement('div')
        card.classList.add('card');
    const content = /** html */ 
        `
        <img class="card__image" src="${image}" alt="">
        <h3 class="card__name">${title}</h3>
        <span class="card__price"> \$ ${price}</span>
        <a href="${href}${id}" class="card__view">Ver producto</a>
    `;
    card.innerHTML=content;
    return card;
}
function createDetail(id,title,price,image){
    const details = document.createElement('div')
        details.classList.add('details');

        const content =/** html */`
            <img class="details__image" src=".${image}" alt="">
            <div class="details__info">
                <h2 class="details__title">${title}</h2>
                <span class="details__price">$ ${price}</span>
                <p class="details__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad aliquid iste?
                    Veritatis iste nisi omnis quia architecto quis voluptates accusamus provident. Eius, distinctio!
                    Harum ea debitis temporibus, praesentium quibusdam in sint deserunt dolor quam. Dolores!
                    Saepe nam dolore beatae, unde dolorem quaerat cupiditate necessitatibus adipisci labore tempora?
                    Laborum itaque similique ipsum libero odit veritatis, ipsa necessitatibus blanditiis deleniti dolore.
                    Unde mollitia, non facere quae adipisci fuga labore libero nobis nemo asperiores.
                    Dicta modi, accusantium perferendis architecto cum cupiditate! Suscipit earum qui aperiam laborum.
                </p>
                <div class="details__menu">
                    <a class="details__link" href="../index.html">Regresar</a>
                    <a class="details__link" href="#id=${id}">Añadir al carrito</a>
                </div>
            </div>
            `;
    details.innerHTML=content;
    return details;
}

function createCategory(category){
    const list = document.createElement('div');
        let name = category.replace(" ","_");
        list.classList.add(name);
        list.classList.add('category');
    const content = /** html */ `
        <div class="category__banner">
            <h2 class="category__name">${category}</h2>
            <a href="" class="category__view">ver todo ⇾</a>
        </div>
        <div class="category__list"></div>
    `;
    list.innerHTML=content;
    return list;
}
    
  export const renderServices = {
    createCard,
    createCategory,
    createDetail,
  }
