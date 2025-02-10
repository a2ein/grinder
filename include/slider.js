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
    setInterval(nextSlide, 9900);
  });

  const videoContainer = document.querySelector('.video-container');
const playButton = document.getElementById('playButton');
const video = document.getElementById('video');

playButton.addEventListener('click', () => {
    videoContainer.classList.add('playing');
    video.src += "?autoplay=1"; // Autoplay the video
});

video.addEventListener('play', () => {
    videoContainer.classList.add('playing');
});

video.addEventListener('pause', () => {
    videoContainer.classList.remove('playing');
});