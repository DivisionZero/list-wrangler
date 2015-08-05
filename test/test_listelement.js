var ListElement = require('../listelement.js');

exports.testListElement = function(test) {
    test.expect(9);
    var values = {
        name: 'foo',
        description: 'describe foo',
        due_date: new Date(),
        alert_date: new Date(),
        is_checked: false
    };
    var le = new ListElement(
        values.name,
        values.description,
        values.due_date,
        values.alert_date,
        values.is_checked
    );
    test.deepEqual(values, {
        name: le.name,
        description: le.description,
        due_date: le.due_date,
        alert_date: le.alert_date,
        is_checked: le.is_checked
    });
    le.editName('bar');
    test.deepEqual('bar', le.name);
    le.editDescription('describe bar');
    test.deepEqual('describe bar', le.description);
    var today = new Date();
    var yesterday = new Date(today.getDate() - 1);
    le.editDueDate(yesterday);
    test.deepEqual(yesterday, le.due_date);
    le.editAlertDate(yesterday);
    test.deepEqual(yesterday, le.alert_date);
    test.deepEqual(true, le.isAlert());
    test.deepEqual(true, le.isDue());
    le.editIsChecked(true);
    test.deepEqual(true, le.is_checked);
    le.check();
    test.deepEqual(false, le.is_checked);
    test.done();
};
