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

// console.log(updHours);

const min = time % 60;
console.log(min);
// const min = time - hours * 60;

console.log("10".padStart(2, "0"));
