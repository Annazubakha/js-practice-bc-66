// const listElements = document.querySelectorAll('.js-panel');

// const onCLickItem = e => {
//   const isOpen = document.querySelector('.open');
//   if (isOpen) {
//     isOpen.classList.remove('open');
//   }

//   if (e.currentTarget === isOpen) {
//     return;
//   }

//   e.currentTarget.classList.add('open');
// };

// listElements.forEach(item => {
//   item.addEventListener('click', onCLickItem);
// });

const element = document.querySelector('.js-panels');

// const handleClick = event => {
//   const isOpen = document.querySelector('.open');

//   console.log(isOpen);

//   let target = event.target;
//   if (event.target.nodeName !== 'LI') {
//     target = event.target.parentNode;
//   }
//   target.classList.toggle('open');

//   if (isOpen) {
//     isOpen.classList.remove('open');
//   }
// };

const handleClick = event => {
  const isOpen = document.querySelector('.open');

  const item = event.target.closest('.js-panel');
  item.classList.add('open');

  if (isOpen) {
    isOpen.classList.remove('open');
  }
};

element.addEventListener('click', handleClick);
