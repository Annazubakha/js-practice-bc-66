// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('.input');
const buttonIncrRef = document.querySelector('[data-action="increment"]');
const buttonDecrRef = document.querySelector('[data-action="decrement"]');
const list = document.querySelector('.list');
let size = 20;

buttonIncrRef.addEventListener('click', () => {
  for (let i = 0; i < inputRef.value; i++) {
    size += 10;
    const item = `<li style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; margin: 2px"></li>`;
    list.insertAdjacentHTML('beforeend', item);
  }
  inputRef.value = '';
});
buttonDecrRef.addEventListener('click', () => {
  list.innerHTML = '';
  size = 20;
});
