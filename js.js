const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  // hide all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // show current slide
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide();
}

setInterval(nextSlide, 1000); // change slide every 5 seconds