const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controller.js')

router.post('/upload-data',uploadController);

module.exports = router;
