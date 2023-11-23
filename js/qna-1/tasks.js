/*

У супермаркеті вишикувалась черга до кас самообслуговування. Ваша задача - написати функцію, яка обчислює загальний час, 
необхідний для того, щоб усі покупці змогли розрахуватись!
Функція має дві вхідні змінні:
customers: масив  натуральних чисел, що представляє чергу. Кожне ціле число представляє клієнта, 
а його значення - це час, необхідний для того, щоб розрахуватися.
n: натуральне число, кількість кас.
Функція повинна повернути ціле число - загальний час, необхідний для цього.

Порядок в черзі НІКОЛИ не змінюється.

Припустимо, що перша людина в черзі (тобто перший елемент масиву) проходить до каси, як тільки вона звільняється.

Наприклад
queueTime([5,3,4], 1)
// має повертати 12
// тому що при n=1 загальний час дорівнює сумі часів
queueTime([10,2,3,3], 2)
// має повернути 10
// тому що тут n=2 і 2-га, 3-тя і 4-та людина в черзі 
// черзі закінчать раніше, ніж закінчить 1-а людина.
queueTime([2,3,10], 2)
// має повернути 12

*/

// function queueTime(customers, n) {
//   //   const array = [];
//   //   for (let i = 0; i < n; i += 1) {
//   //     array.push(0);
//   //   }

//   const array = new Array(n).fill(0);
//   //   for (let customer of customers) {
//   //     const index = array.indexOf(Math.min(...array));
//   //     array[index] += customer;
//   //   }

//   customers.forEach(customer => {
//     const index = array.indexOf(Math.min(...array));
//     array[index] += customer;
//   });
//   return Math.max(...array);
// }
// console.log(queueTime([10, 2, 3, 3], 2));
// console.log(queueTime([5, 3, 4], 1));
// console.log(queueTime([2, 3, 10], 2));

/*
За заданим словником мов та результатами вашого тесту поверніть список мов, для яких тестовий бал не менший за 60, у порядку спадання результатів.

Значення, повторююватися не будуть.

Приклади
{"Java": 10, "Ruby": 80, "Python": 65}  --> ["Ruby", "Python"]
{ "Hindi": 60, "Dutch" : 93, "Greek": 71} --> ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}   --> []
*/

// function findResult(score) {
//   let newArray = [];
//   for (const el in score) {
//     if (score[el] >= 60) {
//       newArray.push(el);
//     }
//   }
//   console.log(newArray);
//   return newArray.sort((a, b) => score[b] - score[a]);
// }

function findResult(score) {
  return Object.keys(score)
    .filter(key => score[key] >= 60)
    .sort((a, b) => score[b] - score[a]);
}
console.log(findResult({ Java: 10, Ruby: 80, Python: 65 }));
console.log(findResult({ Hindi: 60, Dutch: 93, Greek: 71 }));
console.log(findResult({ 'C++': 50, ASM: 10, Haskell: 20 }));
