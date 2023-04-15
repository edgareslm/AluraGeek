const links = document.querySelectorAll('.slider__link');
const slideWrapper = document.querySelector('.slider__show');

links.forEach(link => { link.addEventListener('click', scrollbyX ) });

function scrollbyX (event) {
    event.preventDefault();
    let targetElement = document.querySelector(this.hash);
    let elementPosition = targetElement.getBoundingClientRect().left;
    let currentPosition = slideWrapper.scrollLeft;
    let targetPosition = currentPosition + elementPosition;
    return slideWrapper.scrollLeft = targetPosition;
};


// links.forEach(link => {

//     link.addEventListener('click', function(event) {
//       event.preventDefault();
//       let targetElement = document.querySelector(this.hash);
//       let elementPosition = targetElement.getBoundingClientRect().left;
//       let currentPosition = slideWrapper.scrollLeft;
//       let targetPosition = currentPosition + elementPosition;
//       slideWrapper.scrollLeft = targetPosition;
//       console.log(slideWrapper.scrollLeft);
//     });
    
//   });