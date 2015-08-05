var Interval = require('./interval.js');

function MonthlyInterval(list_names) {
    Interval.call(this, list_names, 'monthly');

    var self = this;
    this.changeDates(function() {
        var today = self.today;
        today.setMonth(today.getMonth() + 1);
        today.setDate(1);
        return new Date(today);
    }, 5*24);
}

MonthlyInterval.prototype = Object.create(Interval.prototype);

module.exports = MonthlyInterval;
