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
// console.log(typeof 1);
// console.log(typeof typeof 1);

const filmoteka = [
  {
    id: 1,
    title: "Duna",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
    image: "https://via.placeholder.com/640/480",
  },
  {
    id: 2,
    title: "Venom",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 8,
    actors: [
      "Inez Greer",
      "Barry Curtis",
      "Blanche Rios",
      "Glen Perry",
      "Logan Powers",
    ],
    adult: true,
    image: "https://via.placeholder.com/640/480",
  },
  {
    id: 3,
    title: "Luca",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 9,
    actors: [
      "Marguerite Gibbs",
      "Lora Alvarez",
      "Jorge Simpson",
      "Thomas Hall",
      "Darrell Hunter",
    ],
    adult: false,
  },
  {
    id: 4,
    title: "Free Guy",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 6,
    actors: [
      "Calvin Andrews",
      "Mamie Myers",
      "Madge Townsend",
      "Ralph Kim",
      "Jorge Reese",
    ],
    adult: false,
    image: "https://via.placeholder.com/640/480",
  },
  {
    id: 5,
    title: "Saw",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 7,
    actors: [
      "Adele Marsh",
      "Melvin Burgess",
      "Jesus Reese",
      "Harriet Moreno",
      "Curtis Cox",
    ],
    adult: true,
  },
  {
    id: 6,
    title: "Duna 2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    rating: 10,
    actors: [
      "Amelia Gibson",
      "Cameron Clayton",
      "Viola Vasquez",
      "Lula Collins",
      "Victor Nichols",
    ],
    adult: false,
    image: "https://via.placeholder.com/640/480",
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив з усіма назвами фільмів.

// const getAllTitlesOfFilms = function (list) {
//   const arr = [];
//   for (const el of list) {
//     arr.push(el.title);
//   }
//   return arr;
// };
// console.log(getAllTitlesOfFilms(filmoteka));

// //? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

// function findFilmByName(films, filmTitle) {
//   for (const el of films) {
//     if (el.title === filmTitle) return el;
//   }
//   return `${filmTitle} not find`;
// }

// console.log(findFilmByName(filmoteka, "ahdtszh"));
// ? Напишіть функцію findFilmByWord(films, filmTitle), яка шукає
//  фільми які включають дане слово.
// function findFilmByWord(films, filmTitle) {
//   const normilizeFilmTitle = filmTitle.toLowerCase();
//   const newArray = [];
//   for (const el of films) {
//     const includesTitle = el.title.toLowerCase().includes(normilizeFilmTitle);
//     const includesDecsr = el.description
//       .toLowerCase()
//       .includes(normilizeFilmTitle);

//     if (includesTitle || includesDecsr) {
//       newArray.push(el);
//     }
//   }
//   return newArray;
// }
// console.log(findFilmByWord(filmoteka, "lorem"));

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.
function getAdultFilms(films) {
  const newArray = [];
  for (const el of films) {
    if (el.adult) {
      newArray.push(el);
    }
  }
  return newArray;
}
console.table(getAdultFilms(filmoteka));
