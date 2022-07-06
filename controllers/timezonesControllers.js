const axios = require('axios');
const Timezone = require('../models/TimeZone');

const timezonesControllers = {
    getListTimezones: async (req, res) => {
        try {
            const timezones = await axios.get('http://worldtimeapi.org/api/timezone');
            if (timezones) {
                res.json({ data: timezones?.data });
            } else {
                throw new Error('Timezones not Found');
            }
        } catch (err) {
            res.json({ success: false, response: err });
        }
    },
    getTimezone: async (req, res) => {
        try {
            const timezone = await axios.get(`http://worldtimeapi.org/api/timezone/${req?.params?.name}`);
            if (timezone) {
                res.json({ response: timezone?.data });
            } else {
                throw new Error('Timezone not Found');
            }
        } catch (error) {
            res.json({ success: false, response: error });
        }
    },

    addSpecificTimezone: (req, res) => {
        try {
            const { timezone, datetime } = req.body;
            const newTimezone = new Timezone({
                timezone,
                datetime,
            });
            newTimezone.save();
            res.json({ response: newTimezone });
        } catch (error) {
            res.json({ success: false, response: error });
        }
    },

    deleteTimezone: async (req, res) => {
        try {
            await Timezone.findOneAndDelete({ _id: req.params.name });
            res.json({ success: true });
        } catch (error) {
            res.json({ success: false, response: error });
        }
    },
};

module.exports = timezonesControllers;
