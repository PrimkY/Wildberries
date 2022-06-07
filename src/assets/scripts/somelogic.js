import { addItem } from '../../index';

let locate = document.location.href;
const splitElem = locate.split('/');
const lastElem = splitElem[splitElem.length-1];
console.log(lastElem);
if(lastElem === 'books.html') {
    
}
