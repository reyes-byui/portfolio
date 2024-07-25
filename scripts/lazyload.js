document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img.lazy-load");

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy-load");
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: "0px 0px 200px 0px"
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });
});

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
  
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
    const titleElementsH3 = document.querySelectorAll('.title-animation');
    const observerH3 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
  
    titleElementsH3.forEach(element => {
        observerH3.observe(element);
    });

    const titleElementsH4 = document.querySelectorAll('.h4-animation');
    const observerH4 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
  
    titleElementsH4.forEach(element => {
        observerH4.observe(element);
    });
});
