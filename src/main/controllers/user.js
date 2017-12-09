const user = require('../models/user')
const encrypt = require('../helpers/encrypt')

exports.createUser = function (req, res) {
    username = req.body.username;
    password = req.body.password;
    const { salt, hash } = encrypt.saltHashPassword({ password });    
    console.log(`Add user ${username}`);
    var createdUser = user.insertUser({
        username: username, 
        encrypted_password: hash,
        salt: salt})
    .then(function(user){
        res.json({user});
    })
    .catch(function(error) {
        res.sendStatus(409)
        console.error(error); });
  };

  exports.getUser = function (req, res) {
    username = req.body.username;
    console.log(`get user ${username}`);
    var getUser = user.getUser({
        username: username
    })
    .then(function(user){
        res.json({user});
    })
    .catch(function(error) {
        res.sendStatus(409)
        console.error(error); });
  };

