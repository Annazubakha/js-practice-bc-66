const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
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
];

const list = document.querySelector('.gallery-list-js');
list.style.display = 'flex';
list.style.flexWrap = 'wrap';
list.style.gap = '15px';
list.style.listStyle = 'none';
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

const createMarcup = arr => {
  return arr
    .map(({ url, alt }) => {
      return /*html*/ `<li><img src="${url}" alt="${alt}" style="width: 100%; height: auto; display: block" ></li>`;
    })
    .join('');
};
list.insertAdjacentHTML('beforeend', createMarcup(pictures));
// list.innerHTML = createMarcup(pictures);
const btn = document.querySelector('.add-photo');

btn.addEventListener('click', () => {
  list.insertAdjacentHTML('beforeend', createMarcup(pictures));
  // list.innerHTML += createMarcup(pictures);
});
