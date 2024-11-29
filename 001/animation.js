const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const fadeElements = document.querySelectorAll('.hidden');
fadeElements.forEach((el) => fadeObserver.observe(el));

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const slideUpObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const slideDownObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const slideUpBtnObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const slideElements = document.querySelectorAll('.slide');
slideElements.forEach((el) => slideObserver.observe(el));

const slideUpElements = document.querySelectorAll('.slideUp');
slideUpElements.forEach((el) => slideUpObserver.observe(el));

const slideDownElements = document.querySelectorAll('.slideDown');
slideDownElements.forEach((el) => slideDownObserver.observe(el));

const slideUpBtnElements = document.querySelectorAll('.slideUp-Btn');
slideUpBtnElements.forEach((el) => slideUpBtnObserver.observe(el));