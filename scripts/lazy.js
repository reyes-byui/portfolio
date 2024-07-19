  // DROPDOWN MENU
  document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuLinks = document.querySelector('.menu-links');
    menuToggle.addEventListener('click', function() {
      menuLinks.classList.toggle('show');
    });
  });




// TRAVEL NEW PLACES GALLERY
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
    dots[i].className = dots[i].className.replace(" activ", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// mutevideo
document.addEventListener('DOMContentLoaded', function() {
  var video = document.querySelector('.imghere video');
  video.muted = true;
  video.autoplay = true;
  video.classList.add('show');
});

// inspiration.js

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('video, img');

    const isVisible = (elem) => {
        const { top, bottom } = elem.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return top <= viewHeight && bottom >= 0;
    };

    const checkVisibility = () => {
        elements.forEach(element => {
            if (isVisible(element)) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});
