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
slider();

//My task
import  database  from "./assets/scripts/database";

const row = document.querySelector('.popular__row');
const allItems = [];

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
  const addPlus = document.createElement('i');
  const counter = document.createElement('span');
  const addMinus = document.createElement('i');

 /*  url.src = url; */
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
  addPlus.className = 'fa-solid fa-plus plus--hidden';
  addMinus.className = 'fa-solid fa-minus minus--hidden'
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
  hiddenBlock.append(addPlus);
  hiddenBlock.append(counter);
  hiddenBlock.append(addMinus);

  addBtn.addEventListener('click', () => {
    addBtn.style.display = 'none';
    hiddenBlock.style.display = 'flex';
    let num = 0;
    counter.innerText = num;
  })
};
  for (let i = 0; i < 6; i++) {
    addItem(newDatabase[Math.floor(Math.random() * newDatabase.length)].category, newDatabase[Math.floor(Math.random() * newDatabase.length)].name, newDatabase[Math.floor(Math.random() * newDatabase.length)].discount, newDatabase[Math.floor(Math.random() * newDatabase.length)].price, newDatabase[Math.floor(Math.random() * newDatabase.length)].count, newDatabase[Math.floor(Math.random() * newDatabase.length)].image, newDatabase[Math.floor(Math.random() * newDatabase.length)].id);
  }