var List = require('../list.js');
var ListElement = require('../listelement.js');
var ListCategory = require('../listcategory.js');

exports.testList = function(test) {
    test.expect(21);
    var today = new Date();
    var category = new ListCategory();
    var list_descriptor = new ListElement(
        'foo', 
        'foo description', 
        new Date(today.setDate(today.getDate() + 2)),
        new Date(today.setDate(today.getDate() + 1))
    );
    var categories = category.defaultCategories();
    var list = new List(
        list_descriptor,
        categories[0],
        true,
        true
    );
    test.ok(list instanceof List);
    test.throws(function () { new List('foo') });
    test.throws(function () { new List(list_descriptor, 'foo') });

    test.throws(function() { list.editCategory('foo') });
    test.ok(list.editCategory(categories[1])
            .editOrdered(false)
            .editSidebar(false) instanceof List);
    test.throws(function() { list.addListElement('foo') });
    test.equal(0, list.elements.length);
    list.addListElement(list_descriptor)
        .addListElement(list_descriptor)
        .addListElement(list_descriptor);
    test.equal(3, list.elements.length);
    list.removeListElement(0);
    test.equal(2, list.elements.length);
    
    var target = new ListElement('target');
    list.addListElement(target);
    test.deepEqual(target, list.elements[2]);
    list.moveListElement(2, 0);
    test.deepEqual(target, list.elements[0]);
    test.deepEqual(list_descriptor, list.elements[2]);

    test.equal(3, list.getRemaining().length);
    test.equal(0, list.getChecked().length);
    list.elements[0].check();
    test.equal(2, list.getRemaining().length);
    test.equal(1, list.getChecked().length);
    test.equal(0, list.getAlerts().length);
    test.equal(0, list.getDue().length);
    test.deepEqual(list.elements, list.getAllElements());

    list.checkAll();
    test.equal(0, list.getRemaining().length);
    list.uncheckAll();
    test.equal(0, list.getChecked().length);

    test.done();
};
