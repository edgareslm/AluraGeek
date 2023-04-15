function productList(){
    return fetch("db.json")
        .then(response=> response.json())
        .then(data=>data.items);
}

function gettList(){
    return fetch("../db.json")
        .then(response=> response.json())
        .then(data=>data.items);
}

function registerProduct(data){
    return fetch('http://localhost:3000/items',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json' 
        },
        body : JSON.stringify(data)
    })
}

export const services ={
    productList,
    registerProduct,
    gettList,
}