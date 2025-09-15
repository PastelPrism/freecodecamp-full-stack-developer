//caroussel

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel-button.next");
const prevBtn = document.querySelector(".carousel-button.prev");

function getSlideWidth() {
  return window.innerWidth <= 768 ? 210 : 460;
}

let currentIndex = 0;
const originalSlideCount = slides.length;

// Infinite - with hiccups - scroll
function setupInfiniteScroll() {

  for (let i = 0; i < 3; i++) {
    const clone = slides[i].cloneNode(true);
    clone.classList.add('cloned');
    track.appendChild(clone);
  }

  for (let i = originalSlideCount - 3; i < originalSlideCount; i++) {
    const clone = slides[i].cloneNode(true);
    clone.classList.add('cloned');
    track.insertBefore(clone, track.firstChild);
  }


  const allSlides = Array.from(track.children);


  currentIndex = 3;


  updateSlidePositions(allSlides);
  moveTo(currentIndex, allSlides, false);
}

// Helper functions
function updateSlidePositions(slideArray = null) {
  const slidesToPosition = slideArray || Array.from(track.children);
  const slideWidth = getSlideWidth();
  slidesToPosition.forEach((slide, idx) => {
    slide.style.left = idx * slideWidth + "px";
  });
}

function moveTo(index, slideArray = null, useTransition = true) {
  const slidesToUse = slideArray || Array.from(track.children);
  const slideWidth = getSlideWidth();
  const amount = -index * slideWidth;

  if (!useTransition) {
    track.style.transition = 'none';
  } else {
    track.style.transition = 'transform 0.3s ease';
  }

  track.style.transform = `translateX(${amount}px)`;
}

setupInfiniteScroll();

window.addEventListener('resize', () => {
  const allSlides = Array.from(track.children);
  updateSlidePositions(allSlides);
  moveTo(currentIndex, allSlides, false);
});

nextBtn.addEventListener("click", () => {
  const allSlides = Array.from(track.children);
  currentIndex++;
  moveTo(currentIndex, allSlides);

  if (currentIndex >= allSlides.length - 3) {
    setTimeout(() => {
      currentIndex = 3;
      moveTo(currentIndex, allSlides, false);
    }, 300);
  }
});

prevBtn.addEventListener("click", () => {
  const allSlides = Array.from(track.children);
  currentIndex--;
  moveTo(currentIndex, allSlides);
  if (currentIndex < 3) {
    setTimeout(() => {
      currentIndex = allSlides.length - 4;
      moveTo(currentIndex, allSlides, false);
    }, 300);
  }
});

// lightbox 
const modal = document.getElementById("modal");
const modalImg = modal.querySelector("img");
const modalDesc = modal.querySelector(".modal-description");
const modalCredit = modal.querySelector(".modal-credit");
const closeBtn = modal.querySelector(".close-btn");

function setupModalListeners() {
  const allSlides = Array.from(track.children);
  allSlides.forEach(slide => {
    slide.addEventListener("click", () => {
      const src = slide.querySelector("img").src;
      const desc = slide.dataset.description;
      const credit = slide.dataset.credit;
      modalImg.src = src;
      modalDesc.textContent = desc;
      modalCredit.innerHTML = credit;
      modal.style.display = "flex";
    });
  });
}

setTimeout(setupModalListeners, 100);

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});