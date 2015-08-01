var ListElement  = require('./listelement.js');
var List         = require('./list.js');
var ListCategory = require('./category.js');

var todo     = new ListCategory('todo', 'TODO List', 'This is a Todo list');
var shopping = new ListCategory('shopping', 'Shopping List', 'This is a shopping list');

var list_init = new ListElement(
	'Target List', 
	'Shop at Target for these items',
	new Date(2015, 8, 3),
	new Date(2015, 8, 2)
);
var list1 = new List(list_init, shopping, true, true);
var element1 = new ListElement('Toothpaste', 'Any toothpaste on sale', null, null, false);
var element2 = new ListElement('socks', 'Ankle high', null, null, false);
var element3 = new ListElement('Contact solution', 'Generic Target brand', null, null, true);
var element4 = new ListElement('Hot sauce', 'Mexican style like Tapatio', null, null, false);
list1.addListElement(element1);
list1.addListElement(element2);
list1.addListElement(element3);
list1.addListElement(element4);
//console.log(list1.getAllElements());
//list1.removeListElement(1);
//list1.moveListElement(1,2);
console.log(list1.getRemaining());
console.log('------------');
//list1.elements[0].editIsChecked(true);
list1.checkAll();
console.log(list1.getRemaining());

