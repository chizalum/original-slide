var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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

// Dropdowns
function programmingList() {  
  document.getElementById("myDropdown1").classList.toggle("show");  
}  
  
function databaseList() {  
  document.getElementById("myDropdown2").classList.toggle("show");  
}  
  
  
function WebTechList() {  
  document.getElementById("myDropdown3").classList.toggle("show");  
}  
   
function hereWeAre() {  
  document.getElementById("myDropdown4").classList.toggle("show");  
}  

function thereTheyAre() {  
  document.getElementById("myDropdown5").classList.toggle("show");  
}  

function letsGo() {  
  document.getElementById("myDropdown6").classList.toggle("show");  
}  

// Close the dropdown menu if the user clicks outside of it  
window.onclick = function(event) {  
  if (!event.target.matches('.dropbtn')) {  
    var dropdowns = document.getElementsByClassName("dropdown-content");  
    var i;  
    for (i = 0; i < dropdowns.length; i++) {  
      var openDropdown = dropdowns[i];  
      if (openDropdown.classList.contains('show')) {  
        openDropdown.classList.remove('show');  
      }  
    }  
  }  
}  