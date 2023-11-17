/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, 
а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати 
виклику колбека.
*/
const numbers = [1, 3, 4, 5];

function each(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}
function qwe(number) {
  return number * 2;
}
console.log(each(numbers, qwe));

function multiply(number) {
  return number * 21;
}

function divide(number) {
  return number / 2;
}
console.log(each(numbers, divide));
