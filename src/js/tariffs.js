const btnPrev = document.querySelector('.js-btn-prev');
const btnNext = document.querySelector('.js-btn-next');

btnPrev.addEventListener('click', (e) => {
  const { target } = e;

  if (!target.classList.contains('tariffs__btn--active')) {
    target.classList.add('tariffs__btn--active');

    btnNext.classList.remove('tariffs__btn--active');
  }
});

btnNext.addEventListener('click', (e) => {
  const { target } = e;

  if (!target.classList.contains('tariffs__btn--active')) {
    target.classList.add('tariffs__btn--active');

    btnPrev.classList.remove('tariffs__btn--active');
  }
});

