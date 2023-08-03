let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonialim');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
    moveToSlide(-1);
});

nextBtn.addEventListener('click', () => {
    moveToSlide(1);
});

function moveToSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = testimonial.length - 1;
    } else if (currentIndex > testimonials.length - 1) {
        currentIndex = 0;
    }
    
    for (let [index, testimonial] of testimonials.entries()) {
        testimonial.style.transform = `translateX(${-100 * currentIndex}%)`;
    }
}

// Auto slide
setInterval(() => {
    moveToSlide(1);
}, 5000); // Change the duration as needed, here it's set to 5 seconds
