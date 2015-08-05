var Interval = require('./interval.js');

function WeeklyInterval(list_names) {
    Interval.call(this, list_names, 'weekly');

    var self = this;
    this.changeDates(function() {
        var day   = self.today.getDay(),
            diff  = self.today.getDate() - day + (day === 0 ? -6:1);
        return new Date(self.today.setDate(diff + 7));
    }, 72);
}

WeeklyInterval.prototype = Object.create(Interval.prototype);

module.exports = WeeklyInterval;
