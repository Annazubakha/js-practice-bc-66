// const inputsList = document.querySelectorAll('input');
// function handleChange(event) {
//   const { name, value, dataset } = event.target;
//   const sufix = dataset.sizing || '';

//   document.documentElement.style.setProperty(`--${name}`, value + sufix);
// }
// inputsList.forEach(input => {
//   input.addEventListener('input', handleChange);
// });

const list = document.querySelector('.js-controls');

const handleChange = evt => {
  const { name, value, dataset, nodeName } = evt.target;
  // if (nodeName !== 'INPUT') return;
  const sufix = dataset.sizing || '';

  document.documentElement.style.setProperty(`--${name}`, value + sufix);
};
list.addEventListener('input', handleChange);
