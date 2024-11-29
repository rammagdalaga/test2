const hideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hideElements = document.querySelectorAll('.hidden2');
hideElements.forEach((el) => hideObserver.observe(el));