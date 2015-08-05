var Interval = require('./interval.js');

function YearlyInterval(list_names) {
    Interval.call(this, list_names, 'yearly');

    self = this;
    this.changeDates(function() {
        var today = self.today;
        today.setFullYear(today.getFullYear() + 1);
        today.setDate(1);
        today.setMonth(0);
        return new Date(today);
    }, 45*24);
}

YearlyInterval.prototype = Object.create(Interval.prototype);

module.exports = YearlyInterval;
