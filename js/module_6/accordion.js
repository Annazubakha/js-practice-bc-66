const accordionButtonList = document.querySelectorAll('.js-accordion-btn');

const onClickBtn = event => {
  const { nextElementSibling } = event.target;
  nextElementSibling.classList.toggle('active');
};

accordionButtonList.forEach(item => item.addEventListener('click', onClickBtn));
