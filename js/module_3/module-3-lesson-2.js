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
// function calcAverage(...args) {
//   let sum = 0;
//   let count = 0;
//   for (const element of args) {
//     if (!Number.isNaN(Number(element))) {
//       sum += element;
//       count += 1;
//     }
//   }
//   return sum / count;
// }
// console.log(calcAverage(1, 2, 3, 'st', 4, 5, 6, 'sd', 7, 8, 9, 0));
// console.log(Number.isNaN(Number(1)));
// console.log(Number.isNaN(Number("2kl")));
// console.log(typeof 1);
// console.log(typeof typeof 1);

const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: [
      'Amelia Gibson',
      'Cameron Clayton',
      'Viola Vasquez',
      'Lula Collins',
      'Victor Nichols',
    ],
    adult: false,
    image: 'https://via.placeholder.com/640/480',
  },
  {
    id: 2,
    title: 'Venom',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 8,
    actors: [
      'Inez Greer',
      'Barry Curtis',
      'Blanche Rios',
      'Glen Perry',
      'Logan Powers',
    ],
    adult: true,
    image: 'https://via.placeholder.com/640/480',
  },
  {
    id: 3,
    title: 'Luca',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 9,
    actors: [
      'Marguerite Gibbs',
      'Lora Alvarez',
      'Jorge Simpson',
      'Thomas Hall',
      'Darrell Hunter',
    ],
    adult: false,
  },
  {
    id: 4,
    title: 'Free Guy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 6,
    actors: [
      'Calvin Andrews',
      'Mamie Myers',
      'Madge Townsend',
      'Ralph Kim',
      'Jorge Reese',
    ],
    adult: false,
    image: 'https://via.placeholder.com/640/480',
  },
  {
    id: 5,
    title: 'Saw',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 7,
    actors: [
      'Adele Marsh',
      'Melvin Burgess',
      'Jesus Reese',
      'Harriet Moreno',
      'Curtis Cox',
    ],
    adult: true,
  },
  {
    id: 6,
    title: 'Duna 2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: [
      'Amelia Gibson',
      'Cameron Clayton',
      'Viola Vasquez',
      'Lula Collins',
      'Victor Nichols',
    ],
    adult: false,
    image: 'https://via.placeholder.com/640/480',
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив з усіма назвами фільмів.

// const getAllTitlesOfFilms = function (list) {
//   const arr = [];
//   for (const { title } of list) {
//     arr.push(title);
//   }
//   return arr;
// };
// console.log(getAllTitlesOfFilms(filmoteka));

const user = {
  firstName: 'John',
  lastName: 'Reese',
  age: 30,
};

/*
? Напишіть деструктуруюче привласнення, яке:
? Властивості firstName привласнить змінну firstName.
? властивості age привласнить змінну userAge.
? властивості isAdmin привласнить змінну isAdmin (false, якщо немає такої властивості)
 */

// const { firstName, lastName, age: userAge, isAdmin = false } = user;
// console.log(firstName);
// console.log(lastName);
// console.log(userAge);
// console.log(isAdmin);

/*
? У нас є об'єкт salaries із зарплатами:
? Створіть функцію topSalary(salaries), яка повертає ім'я працівника з найбільшою заробітною плантею.
? Якщо об'єкт salaries порожній, потрібно повернути null.
? Якщо кілька високооплачуваних працівників, можна повернути будь-кого з них.
? P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.
*/

// const salaries = {
//   John: 100,
//   Pete: 3300,
//   Mary: 2500,
// };

// const topSalary = function (salaries) {
//   const arr = Object.entries(salaries);
//   if (!arr.length) return null;

//   let maxSalary = arr[0][1];
//   let userName = '';
//   for (const [name, salary] of arr) {
//     if (salary > maxSalary) {
//       maxSalary = salary;
//       userName = name;
//     }
//   }

//   console.log(arr);

//   return userName;
// };

// console.log(topSalary(salaries));

// const salaries = {
//   John: 100,
//   Pete: 3300,
//   Mary: 2500,
// };

// const topSalary = function (salaries) {
//   if(!Object.keys(salaries).length) {
//     return null;
//   }

//   let maxSalary = 0;
//   let name = '';
//   for(let key in salaries) {
//     if (salaries[key] > maxSalary) {
//       maxSalary = salaries[key];
//       name = key;
//     }
//   }
//   return name;
// };

// console.log(topSalary(salaries));

/*
 Створіть функцію evenNumbers(array, number) 
яка отримує масив чисел, повертає новий масив парних чисел, що містить number останніх парних чисел з вихідного масиву (у тому самому порядку).

Наприклад:

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

// function evenNumbers(array, number) {
//   const evenArr = [];
//   for (const item of array) {
//     if (item % 2 === 0) evenArr.push(item);
//   }
//   return evenArr.slice(-number);
// }

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// _______________________________________
/*
Напишіть функцію, яка отримуватиме три аргументи. Перші два завжди 
будуть масивами, що складаються з цілих чисел, третій буде рядком букв. 
Довжини перших двох масивів будуть рівні, а цілі числа завжди додатні.

Ви повинні розділити перше ціле число першого масиву на перше число другого 
масиву, щоб знайти залишок, а потім зробити те саме з другою парою цілих чисел 
тощо. Якщо найбільший залишок із усіх знайдених є парним числом, функція має 
повертати рядок маленькими літерами. В іншому випадку функція має повернути 
рядок великими літерами

приклад:

function([16, 16], [10, 5], 'Doctor') має повертати 'doctor', оскільки:

залишок першої пари цілих чисел (16 поділити на 10) дорівнює 6;

залишок другої пари дорівнює 1;

найбільший знайдений залишок дорівнює 6, а оскільки 6 є парним числом --> рядок 
повертається заголовними літерами.
*/

// function changeRegister(array1, array2, str) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     newArray.push(array1[i] % array2[i]);
//   }
//   const maxNumber = Math.max(...newArray);
//   return maxNumber % 2 === 0 ? str.toLowerCase() : str.toUpperCase();
// }
// console.log(changeRegister([16, 16, 7], [15, 5, 4], 'Doctor'));
