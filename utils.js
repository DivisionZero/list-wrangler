exports.createError = function(message, context) {
    return message.replace(context, message);
}

exports.validDate = function(date) {
    return date === null || date instanceof Date || typeof date === 'undefined';
}
