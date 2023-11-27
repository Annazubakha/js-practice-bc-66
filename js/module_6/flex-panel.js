const listElements = document.querySelectorAll('.js-panel');

const onCLickItem = e => {
  const isOpen = document.querySelector('.open');
  if (isOpen) {
    isOpen.classList.remove('open');
  }

  if (e.currentTarget === isOpen) {
    return;
  }

  e.currentTarget.classList.add('open');
};

listElements.forEach(item => {
  item.addEventListener('click', onCLickItem);
});
