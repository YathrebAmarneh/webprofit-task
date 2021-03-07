let span = document.getElementById('span1');
const arr =[`LJ Hooker's`, `Bellamy's`, `Nimble's`, `Logitech`, `Canon's`];
let menu1 = document.querySelector('#menu1');
let menu2 = document.querySelector('#menu2');
let dropmenu = document.querySelector('.dropmenu');
let homeContent = document.querySelector('.home-page-content');

///////////////// slide of words

    let i = 0;
   
    setInterval(function(){
    
        span.innerHTML = arr[i];
        i++;

        if(i > arr.length-1) {
            i = 0;
        }
   }, 1500);

//////////////////// drop-down-menu
   
menu1.addEventListener('click', () => {

    showblock();
})

menu2.addEventListener('click', () => {
    showblock();
})


function closeNav() {
    homeContent.style.display = "block";
    dropmenu.style.height = "0%";
}

function showblock() {
    homeContent.style.display = "none";
    dropmenu.style.height = "100%";
}



//////////////////////////////////////slideshow

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide-holder");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}