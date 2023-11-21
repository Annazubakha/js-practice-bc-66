// const user = {
//   name: 'Mango',
//   showName() {
//     console.log(this);
//     const arrow =() => {
//      console.log(this)
//     }
//     arrow()
//   },
// };

// user.showName()

// const user = {
//     name: "Mango",
//     age: "18",
// }

// function showName(){
//     console.log(this)
// }

// user.showName = showName;
// user.showName();
// // showName.call(user)

/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю, розраховує
? та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.
*/

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     // return this.stones.reduce((totalPrice, { name, price, quantity }) => {
//     //   if (name === stoneName) {
//     //     totalPrice = totalPrice + price * quantity;
//     //   }
//     //   return totalPrice;
//     // }, 0);

//     const { price, quantity } = this.stones.find(
//       ({ name }) => name === stoneName,
//     );
//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

//----------------------------------------------------------------
/*
? Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
*/

// const ladder = {
//   step: 0,

//   up() {
//     this.step += 1;
//     return this;
//   },

//   down() {
//     this.step -= 1;
//     return this;
//   },

//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// }
// // console.log(ladder.up());
// // ladder.up()
// // ladder.down()
// // ladder.up()
// // ladder.showStep()

// //Змініть код методів up, down і showStep таким чином, щоб їх виклик можна 
// //було зробити ланцюжком, наприклад так:
// ladder.up().up().up().down().down().showStep().up().up().up().up().showStep();