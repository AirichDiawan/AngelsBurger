var images = ['Images/Website-Banner-1366-black.png','Images/1366x768 with text.png', 'Images/banner 3.png', 'Images/banner 2.png', 'Images/banner 5.png'];
var i =0;

function slideShow() {
    document.getElementById("image").src=images[i];
    if(i<images.length-1){
        i++;
    }
    else {
        i=0;
    }
    setTimeout("slideShow()" , 3000);
}
window.onload = slideShow;