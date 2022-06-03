import defExport from './assets/scripts/database.js';
const items = document.querySelectorAll('.popular__discount')
window.onload = function() {
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const randomDiscount = function () {
        return `-${(defExport[random(1, 100)].discount)}%`;}
    for ( let i = 0; i < items.length; i++) {
        items[i].innerHTML = randomDiscount()
    }
    };