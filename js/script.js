const links = document.querySelectorAll(".navbar-nav .nav-link");
const current = window.location.pathname.split("/").pop();

links.forEach((link) => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});

const carousel = document.getElementById("carousel");
const count = document.getElementById("count");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const totalSlides = document.querySelectorAll(".carousel-slide").length;
let currentSlide = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  count.textContent = `0${currentSlide + 1} | 0${totalSlides}`;
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

updateCarousel();
