const calendar = document.querySelector('.calendar');

function toggleActive({ target }) {
  if (target.nodeName !== 'TD' || !target.textContent) return;
  const isActive = calendar.querySelector('.active');
  if (target === isActive) {
    target.classList.remove('active');
    return;
  }
  //   if (isActive) {
  //     isActive.classList.remove('active');
  //   }
  isActive?.classList.remove('active');
  target.classList.add('active');
}

calendar.addEventListener('click', toggleActive);
