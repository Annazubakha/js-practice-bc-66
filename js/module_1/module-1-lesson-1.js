// https://marketplace.visualstudio.com/items?itemName=akamud.vscode-javascript-snippet-pack

// console.log("q");
// null, 0, undefined, false, "" , NaN

//? Перевірте чи парні числа 15, 20, 45, 30.
// const isEven = !(15 % 2)
// console.log(isEven);

/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
//70 === 01:10
//90 === 01:30

// const time = 90;
// const hours = Math.floor(time / 60);
// const updHours = (hours + "").padStart(2, "0");

// const min = time % 60;
// const updmin = (min + "").padStart(2, "0");
// console.log(`${updHours}:${updmin}`);

// const min = time - hours * 60;

// const userName = 'PDSDSD!'
// //Потрібно перевірити чи всі літери заголовні в даному рядку
// const isUpperCase = userName === userName.toUpperCase();

// console.log(isUpperCase)

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JS'?.
  ? Дізнайтесь позицію на якій перебуває цей підрядок
*/

// const str = 'HTML, CSS, JS, PHP, React, Vue, Node.JS, C, C++';
// const isExistJs = str.includes('JS');

// console.log(str.lastIndexOf('JS'));
// / За допомогою циклу for додайте всі парні числа від min до max
