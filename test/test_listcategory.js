var ListCategory = require('../listcategory.js');

exports.testListCategory = function(test) {
    test.expect(2);
    var lc1 = new ListCategory(
        'foo',
        'foo name',
        'foo description'
    );
    var lc2 = lc1.defaultCategories()[0];
    test.ok(lc2 instanceof ListCategory);
    test.deepEqual(lc2, lc1.getDefault(lc2.id));
    test.done();
};
