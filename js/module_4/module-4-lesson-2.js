console.log('hello');
/*
? Отримайте з масиву рядків новий масив, що містить довжини рядків:
*/

const wordsArr = ['Існує', 'життя', 'на', 'Марсі', '!'];
const wordsArr2 = ['отримує', 'з', 'масиву', 'рядків'];
function getWordsLength(array) {
  return array.map(element => element.length);
}
console.log(getWordsLength(wordsArr));
