let slideIndex = 0;
let slideTimer; 


showSlides();


function plusSlides(n) {
  
  clearTimeout(slideTimer); 
  

  slideIndex += n;
  updateSlides();
}


function currentSlide(n) {
  clearTimeout(slideTimer);
  slideIndex = n;
  updateSlides();
}


function showSlides() {
  slideIndex++;
  updateSlides();
}


function updateSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");


  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}

 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }


  slides[slideIndex-1].style.display = "block";
  if (dots.length > 0) {
    dots[slideIndex-1].className += " active";
  }


  clearTimeout(slideTimer);
  slideTimer = setTimeout(showSlides, 2000); 
}