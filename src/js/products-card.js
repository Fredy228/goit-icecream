const cardFlip = document.querySelectorAll('[data-card-flip]');
const cardBtn = document.querySelectorAll('[data-card-btn]');

cardBtn.forEach(item => {
  item.addEventListener('click', toggleClass);
});

function toggleClass(event) {
  event.currentTarget.parentNode.children[0].classList.toggle('is-rotate');
  event.currentTarget.parentNode.children[2].classList.toggle('is-rotate');
  event.target.classList.toggle('is-rotate');
}
