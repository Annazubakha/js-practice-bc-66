/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
? За умови, що усі аругменти будуть лише числами.
? Додай перевірку, що аргументами можуть бути не числа
? Потрібно порахувати середнє значення аргументів (чисел)
*/
// function calcAverage() {
//   const arr = Array.from(arguments);
//   let sum = 0;
//   let count = 0;
//   for (const element of arr) {
//     if (typeof element === "number") {
//       sum += element;
//       count += 1;
//     }
//   }
//   return sum / count;
// }
// function calcAverage() {
//   const arr = Array.from(arguments);
//   let sum = 0;
//   let count = 0;
//   for (const element of arr) {
//     if (!Number.isNaN(Number(element))) {
//       sum += element;
//       count += 1;
//     }
//   }
//   return sum / count;
// }
// console.log(calcAverage(1, 2, 3, "st", 4, 5, 6, "sd", 7, 8, 9, 0));
// console.log(Number.isNaN(Number(1)));
// console.log(Number.isNaN(Number("2kl")));
console.log(typeof 1);
console.log(typeof typeof 1);
