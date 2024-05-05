const backdrop = document.querySelector('.js-backdrop');

const btnOpen = document.querySelector('.mob-menu__btn_open');
const btnClose = document.querySelector('.mob-menu__btn_close');

btnOpen.addEventListener('click', () => {
  backdrop.classList.remove('backdrop--hidden');
  document.body.classList.add('to-freeze');
});

btnClose.addEventListener('click', () => {
  backdrop.classList.add('backdrop--hidden');
  document.body.classList.remove('to-freeze');
});