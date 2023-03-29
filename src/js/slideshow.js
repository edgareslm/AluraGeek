window.onload= ()=>{
    const $slider = document.querySelector('.slider');
    const $slider__show = document.querySelector('.slider__show');
  
    let slider_widht= $slider__show.scrollWidth;
    let container_width = $slider.clientWidth;

    window.addEventListener("resize",totalWidth)

    function totalWidth(){
        slider_widht = $slider__show.scrollWidth;
        container_width = $slider.clientWidth;
    }
    
    function startScroll() {
        scrollInterval = setInterval(() => {    
            if ($slider__show.scrollLeft + $slider__show.offsetWidth < slider_widht) {
                $slider__show.scrollLeft += container_width;
            }else{
                $slider__show.scrollLeft = 0;
            }
        }, 
        3000);
    }
  
    function stopScroll() {
      clearInterval(scrollInterval);
    }
  
    startScroll();
  
    $slider.addEventListener('mouseenter', stopScroll);
    $slider.addEventListener('mouseleave', startScroll);
  
  }