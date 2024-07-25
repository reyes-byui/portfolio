  // DROPDOWN MENU
  document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuLinks = document.querySelector('.menu-links');
    menuToggle.addEventListener('click', function() {
      menuLinks.classList.toggle('show');
    });
  });


  // local storage
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

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
