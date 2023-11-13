// const fruits = ['🍎', '🍑', '🍇', '🍑', '🍌', '🍋', '🍑'];
// const index=fruits.indexOf('🍇')
// for (let i = 0; i < fruits.length; i++) {
//     if(i===index){continue}
//     console.log(fruits[i])
// }

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === '🍇') {
//         continue
//     }
//     console.log(fruits[i])
// }

/*
? Створіть масив genres з елементами Jazz і Blues.
? Додайте "rock'n'roll" до кінця.
? Виведіть у консоль перший елемент масиву.
? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
? Видаліть перший елемент та виведіть його в консоль.
? Вставте "Country" та "Reggy" на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];
// const newArr = genres.splice(genres.length, 0, "rock'n'roll");
// genres[genres.length] = "rock'n'roll";

// const newArr = genres.push("rock'n'roll");

// console.log(genres[genres.length - 1]);

// const firstElem = genres.shift();
// const firstElem = genres.splice(0, 1);
// console.log(firstElem[0]);
// genres.unshift('Country', 'Reggy');
// genres.splice(0, 0, 'Country', 'Reggy');

// console.log(genres);
// console.log(newArr);

/*
? Напиши скрипт, який «розвертає» рядок (зворотний порядок букв)
? та виводить її в консоль.
*/

const str = 'JavaScript це цікаво!';
// let rewerseString = ""
// for(let i= str.length-1; i>=0; i-=1 ){
//     rewerseString+= str[i]
// } 
// console.log(rewerseString)

// const array= []
// for(let i= str.length-1; i>=0; i-=1 ){
//     array.push(str[i])
// } 
// console.log(array.join(""))



