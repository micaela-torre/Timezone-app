const express = require('express');
const timezonesControllers = require('../controllers/timezonesControllers');

const router = express.Router();

router.route('/timezones').get(timezonesControllers.getListTimezones);

router
    .route('/timezones/:name')

    .get(timezonesControllers.getTimezone)
    .put(timezonesControllers.addSpecificTimezone)
    .delete(timezonesControllers.deleteTimezone);

module.exports = router;
