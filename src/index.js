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
