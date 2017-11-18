const modelUser = require('../models/user')
const encrypt = require('../helpers/encrypt')

exports.login = function (req, res) {
    username = req.body.username
    password = req.body.password
    console.log(`Authenticating user ${username}`)
    authenticate({
        username: username, 
        password: password})
    .then(({ success }) => {
        if (success) res.sendStatus(200)
        else res.sendStatus(401)
      })
  };

  function authenticate ({ username, password }) {
    return modelUser.getUser({username: username})
      .then(([user]) => {
        if (!user) return { success: false }
        const { hash } = encrypt.saltHashPassword({
          password,
          salt: user.salt
        })
        return { success: hash === user.encrypted_password }
      })
  }