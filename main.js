//change nav style on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});

//contact btn set text as circle 
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach((textButton) => {
  let text = textButton.querySelector('p');
  text.innerHTML = text.innerHTML.split('').map((character, index) => `
    <span style="transform: rotate(${index * 12}deg)">${character}</span>
  `).join('');
});

//swiper slider
let swiperGallery = new Swiper(".mySwiper-gallery", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    599: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

var swiperWorks = new Swiper(".mySwiper-works-1", {
  effect: "cube",
  loop: true,
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});

var swiperWorksCard = new Swiper(".mySwiper-works-2", {
  effect: "cards",
  loop: true,
  grabCursor: true,
});

//show/ hide navbar
const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
  nav.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}

const closeNav = () => {
  nav.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

if(document.body.clientWidth < 1024) {
  nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
  })
}