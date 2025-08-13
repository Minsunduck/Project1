document.addEventListener('DOMContentLoaded', function () {
  const popup = document.querySelector('.popup');
  const closeBtn = popup.querySelector('button');
  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
  });
}); //팝업창

const nav = document.querySelector('.gnb_wrap');
const gnb = document.querySelector('.gnb_wrap .container');
gnb.addEventListener('mouseenter', function () {
  this.classList.add('on');
  nav.style.backgroundColor = 'white';
});
gnb.addEventListener('mouseleave', function () {
  this.classList.remove('on');
  nav.style.backgroundColor = 'transparent';
}); //gnb

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
}); //스와이퍼 

let win = window;
const dot = document.querySelector('.dot');
let body = document.querySelector('body');
const header = document.querySelector('.site-header');

win.addEventListener('scroll', () => {
  let sct = this.scrollY;
  if (sct > 300) {
        dot.style.opacity = '1'
    } else {
        dot.style.opacity = '0'
    }
})

win.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('html,body').scrollTo({top:0,behavior:'smooth'});
})
