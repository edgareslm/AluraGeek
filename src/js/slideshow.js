window.onload= ()=>{
    const $slider = document.querySelector('.slider');
    const $slider__show = document.querySelector('.slider__show');
  
    window.addEventListener("resize",totalWidth)

    let slider_widht= $slider__show.scrollWidth;
    let container_width = $slider.clientWidth;

    function totalWidth(){
        slider_widht = $slider__show.scrollWidth;
        container_width = $slider.clientWidth;
    }

    totalWidth();
    
    function startScroll() {
        let slider_widht= $slider__show.scrollWidth;
        let container_width = $slider.clientWidth;
        let currentPosition = 0;
        let targetPosition = 0;
                
        scrollInterval = setInterval(() => {
            currentPosition = $slider__show.scrollLeft;
            targetPosition = currentPosition + container_width;
            if (targetPosition < slider_widht) {
                $slider__show.scrollLeft += container_width;
            }else{
                $slider__show.scrollLeft = 0;
            }
        }, 
        4000);
    }
  
    function stopScroll() {
      clearInterval(scrollInterval);
    }
  
    startScroll();
  
    $slider.addEventListener('mouseenter', stopScroll);
    $slider.addEventListener('mouseleave', startScroll);
  
  }