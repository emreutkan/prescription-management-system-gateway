const express = require('express');
const forwardRequest = require('../services/requestForwarder');
const { PHARMACY_SERVICE_URL } = require('../utils/env');

const router = express.Router();

// Authentication routes (no middleware required)
router.post('/auth/login', (req, res) => forwardRequest(PHARMACY_SERVICE_URL, req, res));
router.post('/auth/register', (req, res) => forwardRequest(PHARMACY_SERVICE_URL, req, res));


module.exports = router;
