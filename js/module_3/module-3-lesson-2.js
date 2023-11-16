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

const { firstName, lastName, age: userAge, isAdmin = false } = user;
console.log(firstName);
console.log(lastName);
console.log(userAge);
console.log(isAdmin);
