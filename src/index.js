import './style.scss';
import { slider } from './assets/scripts/slider';

const aside = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const burger = document.querySelector('.header__burger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const headerLogoSmall = document.querySelector('.header__logo-small');
const searchBox = document.querySelector('.header__search-box');
const searchClose = document.querySelector('.header__search-close');
const searchMagnifier = document.querySelector('.fa-magnifying-glass');
console.log(headerLogoSmall);

burger.addEventListener('click', () => {
  aside.style.display = 'block';
  body.style.overflowY = 'hidden';
});
close.addEventListener('click', () => {
  aside.style.display = 'none';
  body.style.overflowY = 'auto';
});

searchMagnifier.addEventListener('click', () => {
  searchBox.classList.add('header__search-box-visible');
  searchClose.classList.add('visible');
  headerLogo.classList.add('hidden');
  headerLogoSmall.classList.add('hidden');
  header.classList.add('header-search-visible');
});
searchClose.addEventListener('click', () => {
  searchBox.classList.remove('header__search-box-visible');
  searchClose.classList.remove('visible');
  headerLogo.classList.remove('hidden');
  headerLogoSmall.classList.remove('hidden');
  header.classList.remove('header-search-visible');
});
slider();
