const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
  // hide all slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // show current slide
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide();
}

showSlide(); // show first slide immediately

setInterval(nextSlide, 3000); // change slide every 5 seconds

// section for Contact Us
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  // Validate input fields
  if (!name.trim() || !email.trim() || !message.trim()) {
    alert("Please fill out all fields.");
    return;
  }

  // Send form data to server using AJAX
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/submit-form.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = () => {
    if (xhr.status === 200) {
      alert("Message sent!");
      form.reset();
    } else {
      alert("Error sending message. Please try again later.");
    }
  };
  xhr.send(
    `name=${encodeURIComponent(name)}&email=${encodeURIComponent(
      email
    )}&message=${encodeURIComponent(message)}`
  );
});
