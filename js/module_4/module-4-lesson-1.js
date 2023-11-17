/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, 
а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати 
виклику колбека.
*/
// const numbers = [1, 3, 4, 5];

// function each(array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callback(array[i], i, array));
//   }
//   return newArray;
// }
// function qwe(number) {
//   return number * 2;
// }
// console.log(each(numbers, qwe));

// function multiply(number) {
//   return number * 21;
// }

// function divide(number) {
//   return number / 2;
// }
// console.log(each(numbers, divide));
/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи унікальний ідентифікатор у властивість id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логіює його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і виводить в консоль загальну вартість товару.
*/
// function createProduct(product, callback, callback2) {
//   const newProduct = { ...product, id: Date.now() };
//   callback(newProduct);
//   callback2(newProduct);
// }
// const logProduct = product => {
//   console.log(product);
// };
// const logTotalPrice = ({ price, quantity }) => {
//   console.log(price * quantity);
// };
// createProduct(
//   { name: '🍎', price: 30, quantity: 3 },
//   logProduct,
//   logTotalPrice,
// );
// createProduct(
//   { name: '🍋', price: 20, quantity: 5 },
//   logProduct,
//   logTotalPrice,
// );
// createProduct(
//   { name: '🍎', price: 30, quantity: 3 },
//   logProduct,
//   logTotalPrice,
// );

// Зібрати однакові елементи в двох масивах в один
// за допомогою forEach
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [5, 6, 3];

const newNumbers = [];

numbers.forEach(number => {
  if (numbers2.includes(number)) {
    newNumbers.push(number);
  }
});
console.log(newNumbers);
