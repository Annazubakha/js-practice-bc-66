// Для динамічного створення палітри
function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

const listItems = document.querySelectorAll('.pallet__item');
const list = document.querySelector('.js-pallet');

list.addEventListener('click', onlistClick);

listItems.forEach(element => {
  const color = getRangomColor();
  element.dataset.color = color;
  element.style.backgroundColor = color;
});

// function onlistClick(e) {
//   if (e.target.nodeName === 'UL') return;
//   const isActive = list.querySelector('.active');
//   if (e.target === isActive && e.target.nodeName === 'LI') {
//     isActive.classList.remove('active');
//     e.target.firstElementChild.textContent = '...';

//     return;
//   }
//   if (e.target.nodeName === 'SPAN' && e.target.parentNode === isActive) {
//     isActive.classList.remove('active');
//     isActive.firstElementChild.textContent = '...';
//     return;
//   }
//   if (isActive) {
//     isActive.classList.remove('active');
//     isActive.firstElementChild.textContent = '...';
//   }
//   if (e.target.nodeName === 'LI') {
//     e.target.classList.add('active');
//     e.target.firstElementChild.textContent = e.target.dataset.color;
//   }
//   if (e.target.nodeName === 'SPAN') {
//     e.target.parentNode.classList.add('active');
//     e.target.textContent = e.target.parentNode.dataset.color;
//   }
//   console.log(e.target.dataset.color);
// }
function onlistClick(e) {
  if (e.target.nodeName === 'UL') return;
  const item = e.target.closest('.pallet__item');

  const isActive = list.querySelector('.active');
  if (item === isActive) {
    isActive.classList.remove('active');
    item.firstElementChild.textContent = '...';

    return;
  }
  if (isActive) {
    isActive.classList.remove('active');
    isActive.firstElementChild.textContent = '...';
  }

  item.classList.add('active');
  item.firstElementChild.textContent = item.dataset.color;
}
