const closeBtn = document.querySelector('.fa-times-circle');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
closeBtn.addEventListener('click', () => {
  popup.classList.add('popup-closed');
  overlay.classList.remove('overlay');
});
