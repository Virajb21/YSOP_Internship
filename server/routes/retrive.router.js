const express = require('express');
const router = express.Router();
const retriveController = require('../controllers/retrive.controller.js');

router.post('/retrieve-data',retriveController);

module.exports = router;