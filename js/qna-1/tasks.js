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

// function findResult(score) {
//   return Object.keys(score)
//     .filter(key => score[key] >= 60)
//     .sort((a, b) => score[b] - score[a]);
// }
// console.log(findResult({ Java: 10, Ruby: 80, Python: 65 }));
// console.log(findResult({ Hindi: 60, Dutch: 93, Greek: 71 }));
// console.log(findResult({ 'C++': 50, ASM: 10, Haskell: 20 }));

/*
Дано ціле число. Поверніть фігуру, довжина і ширина якої дорівнює цьому числу. Число буде цілим числом від 0 до 50.

Приклад: Ціле число = 3; Поверніть квадрат 3x3, як показано нижче, у вигляді рядка.

+++
+++
+++
*/

// const makeSquare = (n) => {
//   let square = ''
//   for(let i = 0; i < n; i++) {
//     for(let j = 0; j < n; j++) {
//       square += '+'
//     }
//     square += '\n'
//   }
//   console.log(square)
// }

// const makeSquare = (n) => {
//   return new Array(n).fill('+'.repeat(n)).join('\n')
// }

// console.log(makeSquare(3))

/*
За заданим масивом повернути різницю між кількістю парних чисел та кількістю непарних чисел. 0 буде вважатись парним числом.

Наприклад:
solve([0,1,2,3]) = 0, тому що є два парних числа і два непарних. Парне - непарне = 2 - 2 = 0.


solve([0,1,2,3,'a','b']) = 0. Знову ж таки, Even - Odd = 2 - 2 = 0. Ігноруємо літери.
На вхід буде подано масив лише малих літер та цифр.

*/

// function solve(array) {

// let even = [];
// let odd = [];
// for (const item of array) {
//   if(item % 2 === 0) {
//     even.push(item)
//   }
//   if(item % 2 === 1) {
//     odd.push(item)
//   }
// }

//   const even = array.filter(item => item % 2 === 0)
//   const odd = array.filter(item => item % 2 === 1)
//   return even.length - odd.length
// }

// console.log(solve([0,1,2,3,'a','b']))

/*
Напишіть функцію, яка отримує три аргументи. Перші два завжди будуть масивами, що складаються з цілих чисел, третій - рядком літер. 
Довжини перших двох масивів будуть однакові, а цілі числа завжди додатні.

Ваша функція повинна розділити перше число першого масиву на перше число другого масиву і знайти остачу, 
потім зробити те ж саме з другою парою чисел і т.д. Якщо найбільший знайдений залишок є парним числом, 
функція повинна повернути рядок з мінусом (маленькими літерами). В іншому випадку, функція повинна повернути рядок у великому форматі (великими літерами).

Приклад:

function([16, 16], [10, 5], 'Doctor') повинна повернути 'doctor', тому що

остача від першої пари цілих чисел (16 ділиться на 10) дорівнює 6;

остача від другої пари дорівнює 1;

найбільша знайдена остача дорівнює 6, а оскільки 6 - парне число --> рядок повертається у мінусовому вигляді.
*/

function result(arr1, arr2, str) {
  const array = [];
  arr1.forEach((element, index) => {
    array.push(element % arr2[index]);
  });
  const isEven = !(Math.max(...array) % 2);
  return str[`to${isEven ? 'Lower' : 'Upper'}Case`]();
}
console.log(result([16, 16], [10, 5], 'Doctor'));
