var utils = require('./utils.js');
var date_error = '{field} must be a Date or not defined';

function ListElement(name, description, due_date, alert_date, is_checked) {
	this.name        = name ? name : null;
	this.description = description ? description : null;
	if (!utils.validDate(due_date)) {
		throw new Error(utils.createError(date_error, 'due_date'));
	}
	this.due_date    = due_date ? due_date : null;
	if (!utils.validDate(alert_date)) {
		throw new Error(utils.createError(date_error, 'alert_date'));
	}
	this.alert_date  = alert_date ? alert_date : null;
	this.is_checked  = is_checked ? true : false;
}

ListElement.prototype._edit = function(property, value) {
	this[property] = value;
};

ListElement.prototype.editName = function(value) {
	this._edit('name', value);
};

ListElement.prototype.editDescription = function(value) {
	this._edit('description', value);
};

ListElement.prototype.editDueDate = function(value) {
	this._editDate('due_date', value);
};

ListElement.prototype.editAlertDate = function(value) {
	this._editDate('alert_date', value);
};

ListElement.prototype._editDate = function (field, value) {
	if (utils.validDate(value)) {
		this._edit(field, value);
	} else {
		throw new Error(utils.createError(date_error, field));
	}
};

ListElement.prototype.editIsChecked = function(value) {
	this._edit('is_checked', value ? true : false);
};

ListElement.prototype.isAlert = function(now) {
	return this._isDatePast(this.alert_date, now);
};

ListElement.prototype.isDue = function(now) {
	return this._isDatePast(this.due_date, now);
};

ListElement.prototype._isDatePast = function(date, now) {
    if (date === null) {
        return false;
    }
	if (!(now instanceof Date)) {
		now = new Date();
	}
	return now > date;
};

ListElement.prototype.check = function(value) {
	if (typeof value === 'undefined') {
		// toggle it
		this.is_checked = !this.is_checked;
	} else {
		this.is_checked = value ? true : false;
	}
};

module.exports = ListElement;
