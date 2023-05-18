// EXAMINE THE DOCUMENT OBJECT

//console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent = "Hello";

console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

// GETELEMENTBYID
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "GoodBye";
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h2>Hello Everyone</h2>';

header.style.borderBottom = "solid 3px #000";

// GETELEMENTSBYCLASSNAME

var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[0].textContent = "Groceries";
items[1].textContent = "Medicine";
items[2].textContent = "Vegetables";
items[3].textContent = "Fruits";

var item = document.getElementsByClassName('title');
item.style.fontWeight = 'bold';
item.style.color = 'green';

