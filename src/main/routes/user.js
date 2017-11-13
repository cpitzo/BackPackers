var controller = require('../controllers/user');
var express = require('express');
var router = express.Router();

router.post('/createUser', controller.createUser);

module.exports = router;