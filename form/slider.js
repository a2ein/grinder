document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
  
    function showSlide(index) {
      const offset = -index * 100; // Calculate the offset for the current slide
      slider.style.transform = `translateX(${offset}%)`; // Move the slider
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
      showSlide(currentIndex);
    }
  
    // Change slide every 2 seconds
    setInterval(nextSlide, 2000);
  });