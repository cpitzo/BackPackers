const user = require('../models/user')

exports.createUser = function (req, res) {
    username = req.body.username
    password = req.body.password
    console.log(`Add user ${username}`)
    user.insertUser({
        username: username, 
        password: password})
    .then(() => res.sendStatus(200))
  };
