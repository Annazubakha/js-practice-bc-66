const listElements = document.querySelectorAll('.js-panel');

const onCLickItem = e => {
  const isOpen = document.querySelector('.open');
  if (isOpen) {
    isOpen.classList.remove('open');
  }

  e.target.classList.toggle('open');
};

listElements.forEach(item => {
  item.addEventListener('click', onCLickItem);
});
