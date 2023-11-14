/*Тіммі та Сара думають, що вони закохані, але  вони  дізнаються про це лише тоді, коли зірвуть по квітці. Якщо на одній квітці парна кількість пелюсток, а на іншій непарна кількість пелюсток, це означає, що вони закохані.

Напишіть функцію, яка братиме кількість пелюсток кожної квітки та повертатиме значення true, якщо вони закохані, і значення false, якщо ні.
*/
//function lovefunc(flower1, flower2){}
// function lovefunc(flower1, flower2) {
//   console.log(flower1 % 2);
//   console.log(flower2 % 2);
//   //   if (
//   //     (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//   //     (flower2 % 2 === 0 && flower1 % 2 !== 0)
//   //   ) {
//   //     return true;
//   //   }
//   //   return false;

//   return flower1 % 2 !== flower2 % 2;
// }
// const isLove = lovefunc(6, 6);
// console.log(isLove);

/*
Створіть функцію, яка видаляє перший і останній символи рядка. Вам надається один параметр, вихідний рядок.
*/

function deleteString(str) {
  // const arr = str.split("");
  // arr.splice(0, 1);
  // arr.splice(-1, 1);
  //--------------------------------
  // arr.shift();
  // arr.pop();
  //-------------------------------

  // const deleteArr = arr.splice(1, arr.length - 2);
  // return deleteArr.join("");
  //________________________________

  return str.slice(1, -1);
}

console.log(deleteString("Hello world"));
