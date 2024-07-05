// GALLERY
let gallerySlideIndex = 1;
showGallerySlides(gallerySlideIndex);

function plusGallerySlides(n) {
  showGallerySlides(gallerySlideIndex += n);
}

function currentGallerySlide(n) {
  showGallerySlides(gallerySlideIndex = n);
}

function showGallerySlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dots");
  if (n > slides.length) {gallerySlideIndex = 1}
  if (n < 1) {gallerySlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[gallerySlideIndex-1].style.display = "block";
  dots[gallerySlideIndex-1].className += " activate";
}

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

  elementsToAnimate.forEach(element => {
      if (isInViewport(element)) {
          element.classList.add('animate');
      }
  });

  // Remove scroll event listener once animations are triggered
  if (document.querySelectorAll('.animate-on-scroll:not(.animate)').length === 0) {
      window.removeEventListener('scroll', handleScrollAnimations);
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Initial check on page load
document.addEventListener('DOMContentLoaded', handleScrollAnimations);
