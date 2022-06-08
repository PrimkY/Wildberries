import { addItem } from '../../index';

let locate = document.location.href;
const splitElem = locate.split('/');
const lastElem = splitElem[splitElem.length-1];
if(lastElem === 'books.html') {
    console.log(111);
}
