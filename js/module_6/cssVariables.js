const inputsList = document.querySelectorAll('input');
function handleChange(event) {
  const { name, value, dataset } = event.target;
  const sufix = dataset.sizing || '';

  document.documentElement.style.setProperty(`--${name}`, value + sufix);
}
inputsList.forEach(input => {
  input.addEventListener('input', handleChange);
});
