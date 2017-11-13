const trip = require('../models/trip')

exports.createTrip = function (req, res) {
    userId = req.body.userId
    tripName = req.body.tripName
    location = req.body.location
    trip.insertTrip({
        userId: userId, 
        tripName: tripName, 
        location: location})
    .then(() => res.sendStatus(200))
  };
