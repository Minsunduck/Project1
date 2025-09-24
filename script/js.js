document.addEventListener('DOMContentLoaded', function () {
  const popup = document.querySelector('.popup');
  const closeBtn = popup.querySelector('button');
  closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
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

// Swiper는 DOMContentLoaded 이후에 초기화 (의존 요소 모두 로드 보장)
document.addEventListener('DOMContentLoaded', () => {
  const progressCircle = document.querySelector('.autoplay-progress svg');
  const progressContent = document.querySelector('.autoplay-progress span');
  const swiper = new Swiper('.swiper', {
    effect: 'fade',
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.visual_container',
      clickable: true,
      renderBullet: function (index, className) {
        const labels = ['국내여행정보', '관광기업지원', '관광데이터'];
        const label = labels[index] || `Slide ${index + 1}`;
        return `<span class="${className} bullet-${index}">${label}</span>`;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        if (progressCircle) {
          progressCircle.style.setProperty('--progress', 1 - progress);
        }
        if (progressContent) {
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    }
  });
});

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

// .dot 요소 클릭 시에만 페이지 상단으로 이동
if (dot) {
  dot.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('html,body').scrollTo({ top: 0, behavior: 'smooth' });
  });
}
