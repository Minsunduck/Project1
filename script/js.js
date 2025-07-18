document.addEventListener('DOMContentLoaded', function () {
  const popup = document.querySelector('.popup');
  const closeBtn = popup.querySelector('button');
  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
  });
});