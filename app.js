var itemList = document.querySelector('#items');
// console.log(itemList.parentNode); 
// itemList.parentNode.style.backgroundColor = 'grey';
// console.log(itemList.parentNode.parentNode); 

// // ParentElement
// console.log(itemList.parentElement); 
// console.log(itemList.parentElement.parentElement); 

// // ChildNodes - dont use, because it counts line break
// console.log(itemList.childNodes); 

// // children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstchild - dont use
// // console.log(itemList.firstChild);

// // firstElementChild
// console.log(itemList.firstElementChild);

// // lastchild - dont use
// // console.log(itemList.lastChild);

// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hello 21";

// // next sibling - dont use
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previous sibling - dont use
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// create element
// create a div

var newiv = document.createElement('div');
// Ading class to the new div
newiv.className = 'hello';
// adding id to the div
newiv.id = 'hello1';
// setting attributes
newiv.setAttribute('title', 'Hello Div');

// Create a text node
var newivText = document.createTextNode("Hello World");
// Add text to div
newiv.appendChild(newivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector('header h1');

console.log(newiv);

newiv.style.fontSize = '30px';
container.insertBefore(newiv, h1);

// -------Adding before item 1---------

var newdiv = document.createElement('div');
newdiv.className = 'hello';
newdiv.id = 'hello2';
// Create a text node
var newdivText = document.createTextNode("HEllo");
// Add text to div
newdiv.appendChild(newdivText);

var container2 = document.querySelector(".card");
var h2 = document.querySelector('.card h2');
container2.insertBefore(newdiv, h2);



