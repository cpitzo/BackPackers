const user = require('../models/user')

exports.login = function (req, res) {
    username = req.body.username
    password = req.body.password
    console.log(`login user ${username}`)
    user.authenticate({
        username: username, 
        password: password})
    .then(({ success }) => {
        if (success) res.sendStatus(200)
        else res.sendStatus(401)
      })
  };
