// const accordionButtonList = document.querySelectorAll('.js-accordion-btn');

// const onClickBtn = event => {
//   const { nextElementSibling } = event.target;
//   nextElementSibling.classList.toggle('active');
// };

// accordionButtonList.forEach(item => item.addEventListener('click', onClickBtn));
const list = document.querySelector('.js-accordion-list')
const handlClick = (event)=>{
  const { nextElementSibling,nodeName } = event.target;
  if(nodeName === 'BUTTON'){
    nextElementSibling.classList.toggle('active');
  }
}
list.addEventListener('click',handlClick)
