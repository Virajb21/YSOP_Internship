const express = require('express');
const router = express.Router();
const geolocationController = require('../controllers/geolocation.controller.js');

router.post('/geolocation',geolocationController);

module.exports = router;