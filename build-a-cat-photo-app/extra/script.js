const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel-button.next");
const prevBtn = document.querySelector(".carousel-button.prev");
const slideWidth = slides[0].getBoundingClientRect().width + 10;
let currentIndex = 0;

// Slides
slides.forEach((slide, idx) => {
  slide.style.left = idx * slideWidth + "px";
});

function moveTo(index) {
  const amount = -index * slideWidth;
  track.style.transform = `translateX(${amount}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    moveTo(currentIndex);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveTo(currentIndex);
  }
});

// lightbox 
const modal = document.getElementById("modal");
const modalImg = modal.querySelector("img");
const modalDesc = modal.querySelector(".modal-description");
const modalCredit = modal.querySelector(".modal-credit");
const closeBtn = modal.querySelector(".close-btn");

slides.forEach(slide => {
  slide.addEventListener("click", () => {
    const src = slide.querySelector("img").src;
    const desc = slide.dataset.description;
    const credit = slide.dataset.credit;
    modalImg.src = src;
    modalDesc.textContent = desc;
    modalCredit.innerHTML = credit; // Use innerHTML to preserve HTML links
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// close on background 
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});