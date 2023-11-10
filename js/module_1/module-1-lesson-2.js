/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/

const string = 'abcde';
const message = string.startsWith("a") ? "yes" : "no";
console.log(message);


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