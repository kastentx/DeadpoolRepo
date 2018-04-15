const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const { 
  driverID, 
  getAllDrivers, 
  getDriverByID, 
  getDriverRating, 
  setAvailability,
  setDriverLocation,
  rateRider,
  addDriver,
  removeDriver
} = require('../controllers/driverController');
const { 
  riderID, 
  getAllRiders, 
  getRiderByID, 
  getRiderRating, 
  getPotentialDrivers,
  getTripEstimate,
  setRiderLocation,
  rateDriver,
  requestPickup,
  addRider, 
  removeRider
} = require('../controllers/riderController');
const {
  getCurrentRate,
  tripSimulation
} = require('../controllers/tripController');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* Parameter Definitions */
router.param('driverID', driverID);
router.param('riderID', riderID);

/* Driver Routes */
router.get('/driver', getAllDrivers);
router.get('/driver/:driverID', getDriverByID);
router.get('/driver/:driverID/rating', getDriverRating);
router.put('/driver/:driverID/available', setAvailability);
router.put('/driver/:driverID/location', setDriverLocation);
router.post('/driver/:driverID/rateRider', rateRider);
router.post('/driver', addDriver);
router.delete('/driver/:driverID', removeDriver);

/* Rider Routes */
router.get('/rider', getAllRiders);
router.get('/rider/:riderID', getRiderByID);
router.get('/rider/:riderID/rating', getRiderRating);
router.get('/rider/:riderID/findDrivers', getPotentialDrivers);
router.get('/rider/:riderID/tripEstimate', getTripEstimate);
router.put('/rider/:riderID/location', setRiderLocation);
router.post('/rider/:riderID/rateDriver', rateDriver);
router.post('/rider/:riderID/requestPickup', requestPickup);
router.post('/rider', addRider);
router.delete('/rider/:riderID', removeRider);

/* Trip Routes */
router.get('/trip/currentRate', getCurrentRate);
router.post('/trip/simulation', tripSimulation);
// these are just ideas for future trip functions
// router.get('trip/:tripID', getTripByID);
// router.get('trip/:tripID/status', getTripStatus); <- completed vs. not-completed
// router.put('trip/:tripID/status', updateTripStatus); <- update status of trip
// router.post('/trip/getEstimate', getTripEstimate);

/* catch incorrect routes */
router.use('/', (req, res) => res.sendStatus(404));

module.exports = router;