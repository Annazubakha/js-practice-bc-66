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

const user = {
    name: "Mango",
    age: "18",
}

function showName(){
    console.log(this)
}

user.showName = showName;
user.showName();
// showName.call(user)