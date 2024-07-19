// FOR VIDEOS + IMAGES ----------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('video, img, p');
  
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
  
  // FOR H3----------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function() {
    const titleElements = document.querySelectorAll('.title-animation');
  
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

//FOR H4 --------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const titleElements = document.querySelectorAll('.h4-animation');
  
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