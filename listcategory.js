function ListCategory(id, name, description) {
	this.id = id;
	this.name = name;
	this.description = description;
}

ListCategory.prototype.defaultCategories = function() {
	return [
		new ListCategory('todo', 'TODO List', 'A list for items to do'),
		new ListCategory('shopping', 'Shopping List', 'A list of items to buy'),
		new ListCategory('packing', 'Packing List', 'A list of items to pack'),
		new ListCategory('interval', 'Time Specific Interval Tasks', 'A list of things to do specific to a certain frame of time.  i.e. Dalies, Weekly, Yearly, etc.'),
		new ListCategory('project', 'Project List', 'List of items to complete a project'),
	];
};

ListCategory.prototype.getDefault = function(default_id) {
    var categories = this.defaultCategories();

    for (var i = 0, n = categories.length; i < n; i++) {
        if (categories[i].id === default_id) {
            return categories[i];
        }
    }
    return null;
};

module.exports = ListCategory;
