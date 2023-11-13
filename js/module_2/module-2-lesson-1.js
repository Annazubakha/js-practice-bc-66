
const fruits = ['🍎', '🍑', '🍇', '🍑', '🍌', '🍋', '🍑'];
// const index=fruits.indexOf('🍇')
// for (let i = 0; i < fruits.length; i++) {
//     if(i===index){continue}
//     console.log(fruits[i])
// }

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === '🍇') {
        continue
    }
    console.log(fruits[i])
}