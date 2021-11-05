function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;

    if(scrollValue < 100){
        navbar.classList.remove('scrolling-active');
    }
    else{
        navbar.classList.add('scrolling-active');
    }
}

window.addEventListener('scroll', changeBg);