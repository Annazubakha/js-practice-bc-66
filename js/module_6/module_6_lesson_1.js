// const pictures = [
//   {
//     width: 700,
//     height: 460,
//     url: 'https://picsum.photos/id/0/700/460',
//     alt: 'laptop',
//   },
// {
//   width: 700,
//   height: 460,
//   url: 'https://picsum.photos/id/1/700/460',
//   alt: 'developer',
// },
// {
//   width: 700,
//   height: 460,
//   url: 'https://picsum.photos/id/10/700/460',
//   alt: 'forest',
// },
// {
//   width: 700,
//   height: 460,
//   url: 'https://picsum.photos/id/100/700/460',
//   alt: 'beach',
// },
// {
//   width: 700,
//   height: 460,
//   url: 'https://picsum.photos/id/1000/700/460',
//   alt: 'mountain',
// },
// ];

// const list = document.querySelector('.gallery-list-js');
// list.style.display = 'flex';
// list.style.flexWrap = 'wrap';
// list.style.gap = '15px';
// list.style.listStyle = 'none';
// const arr = pictures.map(item => {
//   const listItem = document.createElement('li');
//   const img = document.createElement('img');
//   img.setAttribute('src', item.url);
//   img.setAttribute('alt', item.alt);
//   img.style.maxWidth = '100%';
//   img.style.height = 'auto';
//   img.style.display = 'block';
//   listItem.append(img);
//   return listItem;
// });
// list.append(...arr);`

// const createMarcup = arr => {
//   return arr
//     .map(({ url, alt }) => {
//       return /*html*/ `<li><img src="${url}" alt="${alt}" style="width: 100%; height: auto; display: block" ></li>`;
//     })
//     .join('');
// };
// list.insertAdjacentHTML('beforeend', createMarcup(pictures));
// // list.innerHTML = createMarcup(pictures);
// const btn = document.querySelector('.add-photo');

// btn.addEventListener('click', () => {
//   list.insertAdjacentHTML('beforeend', createMarcup(pictures));
//   // list.innerHTML += createMarcup(pictures);
// });

//Створити невелику гру:)
// - Спочатку на екрані користувача відображатиметься
//якась форма (коло, квадрат, прямокутник)
// - При натисканні на неї в рандомному порядку форма повинна
//змінюватися на іншу
// - Форма щоразу повинна з'являтися у різних місцях на сторінці
// - Колір форми в рандомному порядку змінюється,

const forms = [
  'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
  'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
  'width: 200px; height: 100px; border-radius: 100px / 50px;',
  'width: 150px; height: 100px; transform: skew(20deg);',
];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomither = max => {
  return Math.floor(Math.random() * max);
};

const boxElement = document.createElement('div');

boxElement.style.cssText = forms[0];
boxElement.style.backgroundColor = getRandomHexColor();
document.body.append(boxElement);

boxElement.addEventListener('click', () => {
  const randomeIndex = randomither(forms.length);
  boxElement.style.cssText = forms[randomeIndex];
  boxElement.style.backgroundColor = getRandomHexColor();
  boxElement.style.position = 'absolute';
  const height =
    100 -
    (boxElement.clientHeight * 100) / document.documentElement.clientHeight;
  const width =
    100 - (boxElement.clientWidth * 100) / document.documentElement.clientWidth;
  boxElement.style.top = `${randomither(height)}%`;
  boxElement.style.left = `${randomither(width)}%`;
});
