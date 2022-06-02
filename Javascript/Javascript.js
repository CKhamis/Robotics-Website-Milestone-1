var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Universal Variable Information
function SetupText(){
    document.getElementById("Version").innerHTML = "Website Version Series: 2796 - Milestone 1";//NEW CALCULATIONS! Add all the version numbers from all html and css pages and do not divide by 10 -- actually u should a message from costi
}
//Account Sign-in Framework

//Easter Eggs
function EasterEgg1(){
  document.getElementById("ErrorImage").style.display = "none";
  document.getElementById("EasterEgg1").style.display = "block";
}