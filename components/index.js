function showSection(sectionId) {
  document.querySelectorAll('.content').forEach(sec => {
    sec.classList.add('hidden');
  });

  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.remove('hidden');
  }
}

function setupMenuLinks() {
  document.querySelectorAll('.menu-item').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.getAttribute('href').replace('#', '');
      window.location.hash = target;
      showSection(target || 'home');
    });
  });
}

window.addEventListener('hashchange', () => {
  const section = window.location.hash.replace('#', '') || 'home';
  showSection(section);
});

window.addEventListener('DOMContentLoaded', () => {
  setupMenuLinks();
  const section = window.location.hash.replace('#', '') || 'home';
  showSection(section);
});

const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator-line');
let currentIndex = 0;
const slideInterval = 5000; 
let autoSlide;

function updateSlides() {
  const slideWidth = slides[0].offsetWidth;
  const visibleSlides = 3;
  const offset = currentIndex * (slideWidth + 0); 
  document.querySelector('.slider').style.transform = `translateX(-${offset}px)`;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentIndex);
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === currentIndex);
  });
}


function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
}

document.querySelector('.next-btn').addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, slideInterval);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

updateSlides();
startAutoSlide();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.drone-operator-button, .drone-operator-button-from-home')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.hash = "drone-operator";
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.robotics-button, .robotics-button-from-home')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.hash = "robotics";
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.arduino-button, .arduino-button-from-home')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.hash = "arduino";
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const viewers = document.querySelectorAll('spline-viewer');
  
  viewers.forEach(viewer => {
    if (viewer.shadowRoot) {
      const link = viewer.shadowRoot.querySelector('a');
      if (link) link.remove();
    }
  });
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('.overlay-img').forEach((img, index) => {
    const speed = 0.2 + index * 0.1;
    img.style.transform = `translateY(-${scrollY * speed}px)`;
  });
});

document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault(); 
  alert("Շնորհակալություն, Ձեր նամակը հաջողությամբ ուղարկվեց!");
  e.target.reset();
});

window.addEventListener("hashchange", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.give-a-chance-button')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.hash = "give-a-chance";
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.give-a-drone-button')
    .forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.hash = "give-a-drone";
      });
    });
});