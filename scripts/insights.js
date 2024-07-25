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


// local storage
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.name.value = localStorage.getItem("name") || "";
  form.email.value = localStorage.getItem("email") || "";
  form.subject.value = localStorage.getItem("subject") || "";
  form.message.value = localStorage.getItem("message") || "";

  form.addEventListener("input", function() {
      localStorage.setItem("name", form.name.value);
      localStorage.setItem("email", form.email.value);
      localStorage.setItem("subject", form.subject.value);
      localStorage.setItem("message", form.message.value);
  });
});
