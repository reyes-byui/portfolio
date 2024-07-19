  // DROPDOWN MENU
  document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuLinks = document.querySelector('.menu-links');
    menuToggle.addEventListener('click', function() {
      menuLinks.classList.toggle('show');
    });
  });

  
// ACCORDION--------------------------------
var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    
    // Close all panels
    for (var j = 0; j < panels.length; j++) {
      if (panels[j] !== panel) {
        panels[j].style.display = "none";
        acc[j].classList.remove("actives");
      }
    }
    
    // Toggle the current panel
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
    this.classList.toggle("actives");
  });
}


  // PHOTOGRAPHY GALLERY-----------------------------
let slideIndexPhotography = 1;
showSlidesPhotography(slideIndexPhotography);

// Next/previous controls
function plusSlidesPhotography(n) {
  showSlidesPhotography(slideIndexPhotography += n);
}

// Thumbnail image controls----------------------
function currentSlidePhotography(n) {
  showSlidesPhotography(slideIndexPhotography = n);
}

function showSlidesPhotography(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dots");
  if (n > slides.length) {slideIndexPhotography = 1}
  if (n < 1) {slideIndexPhotography = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexPhotography-1].style.display = "block";
  dots[slideIndexPhotography-1].className += " active";
}


// MOCKUP GALLERY----------------------------
  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function addSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function nowSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mockupSlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("captionalt");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// mute videos
document.addEventListener('DOMContentLoaded', function() {
  var video = document.querySelector('#videothere video');
  video.muted = true;
  video.autoplay = true;
  video.classList.add('show');
});

document.addEventListener('DOMContentLoaded', function() {
  var videos = document.querySelectorAll('.windowd video');
  videos.forEach(function(video) {
    video.muted = true;
    video.autoplay = true;
    video.classList.add('show');
  });
});
