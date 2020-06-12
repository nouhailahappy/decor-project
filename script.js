//nav 
function toggle(){
  var menu = document.getElementById("Menu")
  var navbar = document.getElementById("nav-bar")
  menu.classList.toggle('active')
  navbar.classList.toggle('active')
}
function fonction(){
  var header = document.getElementById("header")
  var navbar = document.getElementById("nav-bar")
  var menu = document.getElementById("Menu")
  navbar.classList.remove('active')
  menu.classList.remove('active')
  header.classList.add('active')
}

// image slider
var slider = document.getElementById("img-slider")
var images = slider.getElementsByTagName("img")
var temp = 0;
function nextImg(){
    images[temp].classList.remove('active');
    temp = (temp+1)% images.length;
    images[temp].classList.add('active')
}
function PrevImg(){
    images[temp].classList.remove('active');
    temp = (temp-1+images.length)% images.length;
    images[temp].classList.add('active')
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
