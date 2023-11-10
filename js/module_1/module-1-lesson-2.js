/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/

// const string = 'abcde';
// const message = string.startsWith("a") ? "yes" : "no";
// console.log(message);

// if (string.startsWith("a")) {
//     console.log("yes");
// } else {
//     console.log("no");
// };

// if (string[0] === "a") {
//     console.log("yes");
// } else {
//     console.log("no");
// };
// const max = 50;
// const min = 0;
// let total = 0;
// for (let i = max; i > min; i -= 1) {
//   if (!(i % 2)) {
//     total += i;
//   }
// }

// for (let i = max; i > min; i -= 1) {
//   if (i % 2) {
//     continue;
//   }
//   total += i;
// }
// console.log(total);

//Напишіть код, який запитуватиме
//Логін за допомогою prompt і логувати результат
//В консоль браузера

//Якщо відвідувач вводить "Admin",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Cancel"
// В іншому випадку вивести рядок "I do not know you"

//Пароль перевіряти так:
//Якщо введено пароль "I'm the boss",
//то вивести рядок "Hello!"
//інакше виводити рядок "Invalid password!"

const userInp = prompt('Enter login');


if (userInp === 'Admin') {

  const password = prompt('Enter password');
  if (password === 'Im the boss') {
    console.log('Hello');
  } else if (password === null) {
  console.log('Cancel');
} 
  else {
    console.log('Invalid password!');
  } 
  
} else if (userInp === null) {
  console.log('Cancel');
}
 else {
  console.log('I do not know you');
}


