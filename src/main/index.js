const express = require('express')
const bodyParser = require('body-parser')
const app = express();
  
app.use(express.static('public'));
app.use(bodyParser.json());

app.use(require('./routes/user'));

app.use(require('./routes/login'));

app.use(require('./routes/trip'));

var server = app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
});

module.exports = server;

