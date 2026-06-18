// Появляющиеся плашки

let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

let callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active')

            observer.unobserve(entry.target)
        } 
    })
}

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim');

targets.forEach(target => {
    observer.observe(target);
});

// Слайдер

document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelector('.slider-block');
    const slidesAll = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.button-prev');
    const nextBtn = document.querySelector('.button-next');

    const slidesLength = slidesAll.length;
    
    let currentIndex = 0;

    function sliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`
    }

    nextBtn.addEventListener('click', () => {

        if (currentIndex < slidesLength - 1) {
            currentIndex++
        } else {
            currentIndex = 0
        }

        sliderPosition()
    })

    prevBtn.addEventListener('click', () => {

        if (currentIndex > 0) {
            currentIndex--
        } else {
            currentIndex = slidesLength - 1;
        }

        sliderPosition()
    })

    sliderPosition()
})