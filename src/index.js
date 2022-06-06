import './style.scss';
import { slider } from './assets/scripts/slider';

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

import  database  from "./assets/scripts/database";

const row = document.querySelector('.popular__row');

let databaseJson = JSON.stringify(database);
let newDatabase = JSON.parse(databaseJson);


let randomItem = newDatabase[Math.floor(Math.random() * newDatabase.length)];


export const GenerateItem = function (category,name,discount,price,count,image,id) {
  this.category = category;
  this.name = name;
  this.discount = discount;
  this.price = price;
  this.count = count;
  this.image = image;
  this.id = id;
};

const addItem = (category, name, discount, price, count, url, id) => {
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

  img.src = url;
  card.dataset.id = id;

  const fastCheckTxtNode = document.createTextNode('Быстрый просмотр');
  const discountPopTxtNode = document.createTextNode(discount + '%');
  const priceNowTxt = document.createTextNode(price + ' ₽');
  const nameItemTxtNode = document.createTextNode(category);

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
    console.log(event.target.closest('.popular__card').dataset.id); //!
  })

  hiddenBlock.addEventListener('click', (event) => {
    if(event.target === addPlus) {
      num++;
      counter.innerText = num;
    } else if(event.target === addMinus) {
      num--;
      counter.innerText = num;
    }
    if(num < 0) {
      num = 0;
      counter.innerText = num;
    }
  })
  
  const getCard = async() => {
    const response = await fetch('http://ec2-3-91-9-40.compute-1.amazonaws.com:31337/products/');
    const cards = await response.json();
    const allItems = [];

    for (const iterator of cards) {
      allItems.push(iterator);
    }
    localStorage.setItem('items', JSON.stringify(allItems));

    addPlus.addEventListener('click', (event) => {
      const currentElem = event.target.closest('.popular__card'); //!
      const selectedTodo = allItems.find(
      (item) => +item.id === +currentElem.dataset.id
      );
      selectedTodo.count++;
      console.log(selectedTodo.count);
    })
    addMinus.addEventListener('click', (event) => {
      const currentElem = event.target.closest('.popular__card'); //!
      const selectedTodo = allItems.find(
      (item) => +item.id === +currentElem.dataset.id
      );
      selectedTodo.count--;
      console.log(selectedTodo.count);
    })
  }
  getCard();

};

for (let i = 0; i < 6; i++) {
  addItem(newDatabase[Math.floor(Math.random() * newDatabase.length)].category, newDatabase[Math.floor(Math.random() * newDatabase.length)].name, newDatabase[Math.floor(Math.random() * newDatabase.length)].discount, newDatabase[Math.floor(Math.random() * newDatabase.length)].price, newDatabase[Math.floor(Math.random() * newDatabase.length)].count, newDatabase[Math.floor(Math.random() * newDatabase.length)].image, newDatabase[Math.floor(Math.random() * newDatabase.length)].id);
};

const imgUploadJsonplaceholder = async () => {
  const imgArr = document.getElementsByClassName('popular__img');

  for (let i = 0; i < imgArr.length; i++) {
    const num = Math.round(Math.random() * 100);
    const response = await fetch(`http://ec2-3-91-9-40.compute-1.amazonaws.com:31337/products/${num}/`);
    const card = await response.json();
    const imgUrl = await card.image_url;
    console.log(card.id);
    imgArr[i].src = imgUrl;
  }
};

imgUploadJsonplaceholder();