const express = require('express');
const forwardRequest = require('../services/requestForwarder');
const { MEDICINE_SERVICE_URL } = require('../utils/env');

const router = express.Router();

router.get('/search', (req, res) => forwardRequest(MEDICINE_SERVICE_URL, req, res));

module.exports = router;
