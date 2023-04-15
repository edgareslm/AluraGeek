const icon = document.querySelector('.search__ico');
const serach = document.querySelector('.search__input');

icon.addEventListener("click",
    function(){
        serach.classList.toggle("search__input--hidden");
    }
)

