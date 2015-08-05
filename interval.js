var ListElement = require('./listelement.js');

function Interval(list_names, interval_type) {
    if (!(list_names instanceof Array)) {
        throw new Error('list_names must be an array');
    }
    this.today         = new Date();
    this.today.setHours(0, 0, 0);
    this.list_names    = list_names;
    var upper_type, name, description;
    if (typeof interval_type !== "undefined") {
        upper_type  = interval_type.charAt(0).toUpperCase() + 
                      interval_type.slice(1);
        name        = upper_type + ' Rotating TODO List';
        description = upper_type + ' list of tasks to get done. Clears and rotates in a ' + this.interval_type + ' time period';
    }
    ListElement.call(this, name, description);
}

Interval.prototype = Object.create(ListElement.prototype);

Interval.prototype.changeDates = function(due_date_func, alert_hours, time_alert) {
    if (typeof time_alert === "undefined") {
        time_alert = 7; // default time at 7 am
    }
    var alert_num = (alert_hours - time_alert) * 3600000;
    var due_date  = due_date_func();
    this.editDueDate(due_date);
    var alert_time = new Date(due_date - alert_num);
    this.editAlertDate(alert_time);
};

module.exports = Interval;
