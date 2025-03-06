document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.menu-toggle');
  var menuLinks = document.querySelector('.menu-links');
  menuToggle.addEventListener('click', function() {
      menuLinks.classList.toggle('show');
  });
  
  const titleElements = document.querySelectorAll('.title-animation, .h4-animation');
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.1 
  });

  titleElements.forEach(element => {
      observer.observe(element);
  });
});