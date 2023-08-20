// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Vanilla JavaScript Counter</h1>`;

//this function makes it easier to create new elements and set id attribute
function createElements(parent, newChild, id = '', text = '') {
  const newElement = parent.appendChild(document.createElement(newChild));
  newElement.setAttribute('id', id);
  text !== '' ? (newElement.innerText = text) : '';
}

let count = 0;

//created new elements assigning id and inner text
createElements(appDiv, 'div', 'counter');
createElements(appDiv, 'button', 'add', 'Add');
createElements(appDiv, 'button', 'minus', 'Subtract');

const counter = document.getElementById('counter');
const addButton = document.getElementById('add');
const minusButtonn = document.getElementById('minus');

counter.innerHTML = `<h2>Counter: ${count}</h2>`;

const add = () => (counter.innerHTML = `<h2>Counter: ${(count += 1)}</h2>`);
const minus = () => (counter.innerHTML = `<h2>Counter: ${(count -= 1)}</h2>`);

addButton.addEventListener('click', add);
minusButtonn.addEventListener('click', minus);
