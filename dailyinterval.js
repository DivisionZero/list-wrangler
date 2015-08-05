var Interval = require('./interval.js');

function DailyInterval(list_names) {
    Interval.call(this, list_names, 'daily');

    var self = this;
    this.changeDates(function() {
        return new Date(self.today.setDate(self.today.getDate() + 1));
    }, 3, 0);
}

DailyInterval.prototype = Object.create(Interval.prototype);

module.exports = DailyInterval;
