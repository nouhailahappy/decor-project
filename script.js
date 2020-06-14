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

//slide-animation

window.sr = ScrollReveal();
sr.reveal(".animate-left", {
  origin: "left",
  duration: 600,
  distance: "15rem",
  delay: 600
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 600,
  distance: "18rem",
  delay: 600
});
sr.reveal(".animate-top", {
  origin: "top",
  duration: 600,
  distance: "25rem",
  delay: 1000
});
sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600
});

//readmore pop-up
function popup(){
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

var modalBtn = document.querySelector('.boutton');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
modalBtn.addEventListener('click',function(){
  modalBg.classList.add('bg-active');
})
modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
})

