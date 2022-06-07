import './style.scss';

const aside = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const burger = document.querySelector('.header__burger');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  aside.style.display = 'block';
  body.style.overflowY = 'hidden';
});
close.addEventListener('click', () => {
  aside.style.display = 'none';
  body.style.overflowY = 'auto';
});

const row = document.querySelector('.popular__row');

export const GenerateItem = function (category,name,discount,price,count,image,id) {
  this.category = category;
  this.name = name;
  this.discount = discount;
  this.price = price;
  this.count = count;
  this.image = image;
  this.id = id;
};

const addStorageItems = async() => {
  const response = await fetch('http://ec2-3-91-9-40.compute-1.amazonaws.com:31337/products/');
  const cards = await response.json();
  localStorage.setItem('items', JSON.stringify(cards));


  const addItem = (category, title, discount, price, count, url, id) => {
  const liItem = document.createElement('li');
  const card = document.createElement('div');
  const img = document.createElement('img');
  const fastCheck = document.createElement('a');
  const discountPop = document.createElement('span');
  const addBtn = document.createElement('button');
  const priceRow = document.createElement('div');
  const priceNow = document.createElement('p');
  const addBtnPlus = document.createElement('i');
  const nameItem = document.createElement('div');
  const hiddenBlock = document.createElement('div');
  const addMinus = document.createElement('i');
  const counter = document.createElement('span');
  const addPlus = document.createElement('i');

  card.dataset.id = id;
  const getImage = JSON.parse(localStorage.getItem('items'));
  img.src = getImage[id-1].image_url;

  const fastCheckTxtNode = document.createTextNode('Быстрый просмотр');
  const discountPopTxtNode = document.createTextNode(discount + '%');
  const priceNowTxt = document.createTextNode(price + ' BYN');
  const nameItemTxtNode = document.createTextNode(title +'');

  fastCheck.append(fastCheckTxtNode);
  discountPop.append(discountPopTxtNode);
  priceNow.append(priceNowTxt);
  nameItem.append(nameItemTxtNode);

  liItem.className = 'popular__item';
  card.className = 'popular__card';
  img.className = 'popular__img';
  fastCheck.className = 'popular__fast-check';
  discountPop.className = 'popular__discount';
  addBtn.className = 'popular__add';
  addBtnPlus.className = 'fa-solid fa-plus';
  priceRow.className = 'popular__price-row';
  priceNow.className = 'popular__price-now';
  nameItem.className = 'popular__name';
  addMinus.className = 'fa-solid fa-minus minus--hidden'
  addPlus.className = 'fa-solid fa-plus plus--hidden';
  hiddenBlock.className = 'popular__hidden-block';

  liItem.append(card);
  card.append(img);
  card.append(fastCheck);
  card.append(discountPop);
  addBtn.append(addBtnPlus);
  card.append(addBtn);
  liItem.append(priceRow);
  priceRow.append(priceNow);
  row.append(liItem);
  liItem.append(nameItem);
  card.append(hiddenBlock);
  hiddenBlock.append(addMinus);
  hiddenBlock.append(counter);
  hiddenBlock.append(addPlus);

  let num = 1;
  counter.innerText = num;

  addBtn.addEventListener('click', () => {
    addBtn.style.display = 'none';
    hiddenBlock.style.display = 'flex';
  })

  hiddenBlock.addEventListener('click', (event) => {
    if (event.target === addPlus) {
      num++;
      counter.innerText = num;
    }
  });

    addBtn.addEventListener('click', (event) => {
      const getCards = JSON.parse(localStorage.getItem('items'));
      const currentElem = event.target.closest('.popular__card');
      const selectedTodo = getCards.find(
      (item) => +item.id === +currentElem.dataset.id
      );
      console.log(selectedTodo)
      selectedTodo.count++;
      localStorage.setItem('items', JSON.stringify(getCards));
    })

    addPlus.addEventListener('click', (event) => {
      const getCards = JSON.parse(localStorage.getItem('items'));
      const currentElem = event.target.closest('.popular__card');
      const selectedTodo = getCards.find(
      (item) => +item.id === +currentElem.dataset.id
      );
      selectedTodo.count++;
      console.log(selectedTodo.count);
      localStorage.setItem('items', JSON.stringify(getCards));
    })

    addMinus.addEventListener('click', (event) => {
      const currentElem = event.target.closest('.popular__card'); //!
      const selectedTodo = allItems.find(
      (item) => +item.id === +currentElem.dataset.id
      );
      selectedTodo.count--;
      localStorage.setItem('items', JSON.stringify(allItems));
      console.log(selectedTodo.count);
    });
  };
  const getCard = () => {
    const allItems = JSON.parse(localStorage.getItem('items'));

    for (let i = 0; i < 6; i++) {
      const randCard = allItems[Math.ceil(Math.random()*100)];
      console.log(randCard);
      addItem(randCard.category, randCard.title, randCard.discount, randCard.price, randCard.count, randCard.url, randCard.id);
    }
};
  return getCard();
};

addStorageItems();

