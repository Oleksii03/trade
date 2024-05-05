const boxes = Array.from(document.querySelectorAll('.box'));

boxes.forEach(box => {
  box.addEventListener('click', boxClickHandler);
});

function boxClickHandler (e) {
  e.preventDefault();
  let correntBox = e.target.closest('.box');
  let correntContent = e.target.nextElementSibling;

  correntBox.classList.toggle('active');

  if (correntBox.classList.contains('active')) {
    correntContent.style.maxHeight = correntContent.scrollHeight + 'px';
  } else {
    correntContent.style.maxHeight = 0;
  }
}

