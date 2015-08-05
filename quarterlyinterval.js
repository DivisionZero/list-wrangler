var Interval = require('./interval.js');

function QuarterlyInterval(list_names) {
    Interval.call(this, list_names, 'quarterly');

    var self = this;
    this.changeDates(function() {
        var month = self.today.getMonth();
        return new Date(self.today.getFullYear(), Math.floor((month / 3) + 1) * 3, 1);
    }, 10*24);
}

QuarterlyInterval.prototype = Object.create(Interval.prototype);

module.exports = QuarterlyInterval;
