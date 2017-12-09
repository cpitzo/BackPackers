var controller = require('../controllers/user');
var express = require('express');
var router = express.Router();

router.post('/createUser', controller.createUser);
router.get('/getUser', controller.getUser);

module.exports = router;