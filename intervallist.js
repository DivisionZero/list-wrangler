var List         = require('./list.js');
var ListElement  = require('./listelement.js');
var ListCategory = require('./listcategory.js');
var Interval     = require('./interval.js');

function IntervalList(interval_desc) {
    var category = new ListCategory();
    if (!(interval_desc instanceof Interval)) {
        throw new Error('interval_desc must be an instance of Interval');
    }
    List.call(this, interval_desc, category.getDefault('interval'));
    interval_desc.list_names.forEach(function(item) {
        this.addListElement(new ListElement(item, null, null, null));
    }, this);
}

IntervalList.prototype = Object.create(List.prototype);

module.exports = IntervalList;
