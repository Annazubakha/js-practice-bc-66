// console.log('hello');
/*
? Отримайте з масиву рядків новий масив, що містить довжини рядків:
*/

// const wordsArr = ['Існує', 'життя', 'на', 'Марсі', '!'];
// const wordsArr2 = ['отримує', 'з', 'масиву', 'рядків'];
// function getWordsLength(array) {
//   return array.map(element => element.length);
// }
// console.log(getWordsLength(wordsArr));

/*
? Створення масиву значень Фаренгейта із масиву значень Цельсія
? Для переведення з Цельсій до Фаренгейтів потрібна формула. F = C * 1.8 + 32
*/
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

// const result = celsius.map(elem => elem * 1.8 + 32);

// console.log(result);

// отримайте масив з назвами курсів

const students = [
  {
    name: 'Манго',
    courses: ['математика', 'фізика'],
  },
  { name: 'Полі', courses: ['інформатика', 'математика'] },
  { name: 'Ківі', courses: ['фізика', 'біологія'] },
];

// const result = students
//   .map(student => {
//     return student.courses;
//   })
//   .flat();

// console.log(result);

const result = students.flatMap(student => student.courses);
console.log(result);
