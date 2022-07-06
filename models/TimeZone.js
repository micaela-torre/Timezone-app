const mongoose = require('mongoose');

const timeZoneSchema = new mongoose.Schema({
    datetime: { type: String, required: true },
    timezone: { type: String, required: true },
});

const TimeZone = mongoose.model('timezone', timeZoneSchema);

module.exports = TimeZone;
