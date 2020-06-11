//nav 
function toggle(){
  var menu = document.getElementById("Menu")
  var navbar = document.getElementById("nav-bar")
  menu.classList.toggle('active')
  navbar.classList.toggle('active')
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
 // sroll animation
window.sr = ScrollReveal();
sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600
});
sr.reveal(".animate-top", {
  origin: "top",
  duration: 1400,
  distance: "25rem",
  delay: 600
});
sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600
});