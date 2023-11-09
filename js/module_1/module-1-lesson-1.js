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

const time = 90;
const hours = Math.floor(time / 60);
const updHours = (hours + "").padStart(2, "0");

const min = time % 60;
const updmin = (min + "").padStart(2, "0");
console.log(`${updHours}:${updmin}`);

// const min = time - hours * 60;
