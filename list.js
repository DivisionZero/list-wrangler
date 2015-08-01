var ListCategory   = require('./category.js');
var ListElement    = require('./listelement.js');
var utils          = require('./utils.js');
var listelem_error = '{field} must be an instance of ListElement';
var category_error = '{field} must be an instance of ListCategory';

function List(list_descriptor, category, ordered, sidebar) {
	if (!(list_descriptor instanceof ListElement)) {
		throw new Error(utils.createError(listelem_error, 'list_descriptor'));
	}
	ListElement.call(
		this, 
		list_descriptor.name, 
		list_descriptor.description, 
		list_descriptor.due_date, 
		list_descriptor.alert_date, 
		list_descriptor.is_checked
	); 
	if (!(category instanceof ListCategory)) {
		throw new Error(utils.createError(category, 'category'));
	}
	this.category = category;
	this.ordered  = ordered ? true : false;
	this.sidebar  = sidebar ? true : false;
	this.elements = [];
}

List.prototype = Object.create(ListElement.prototype);

List.prototype.editCategory = function(category) {
	if (!(category) instanceof ListCategory) {
		throw new Error(utils.createError(category, 'category'));
	}
	this.category = category;
}

List.prototype.editOrdered = function(ordered) {
	this.ordered = ordered ? true : false; 
}

List.prototype.editSidebar = function(sidebar) {
	this.sidebar = sidebar ? true : false; 
}

List.prototype.addListElement = function(list_element) {
	if (!(list_element instanceof ListElement)) {
		throw new Error(utils.createError(list_element, 'list_element'));
	}
	this.elements.push(list_element);
}

List.prototype.removeListElement = function(index) {
	this.elements.splice(index, 1);
}

List.prototype.moveListElement = function(current_index, new_index) {
	this.elements.splice(new_index, 0, this.elements.splice(current_index, 1)[0]);
}

List.prototype.getChecked = function() {
	return this.elements.filter(function(element) {
		return element.is_checked ? element : false;
	});
}

List.prototype.getDue = function() {
	return this.elements.filter(function(element) {
		return element.isDue() ? element : false;
	});
}

List.prototype.getAlerts = function() {
	return this.elements.filter(function(element) {
		return element.isAlert() ? element : false;
	});
}

List.prototype.getRemaining = function() {
	return this.elements.filter(function(element) {
		return !element.is_checked ? element : false;
	});
}

List.prototype.getAllElements = function() {
	return this.elements;
}

List.prototype.checkAll = function() {
	this.elements.forEach(function(element) {
		element.editIsChecked(true);
	});
}

List.prototype.uncheckAll = function() {
	this.elements.forEach(function(element) {
		element.editIsChecked(false);
	});
}


module.exports = List;
