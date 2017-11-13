var controller = require('../controllers/trip');
var express = require('express');
var router = express.Router();

router.post('/createTrip', controller.createTrip);

module.exports = router;