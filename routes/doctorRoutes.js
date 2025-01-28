const express = require('express');
const forwardRequest = require('../services/requestForwarder');
const { DOCTOR_SERVICE_URL } = require('../utils/env');

const router = express.Router();

// Authentication routes (no middleware required)
router.post('/auth/login', (req, res) => forwardRequest(DOCTOR_SERVICE_URL, req, res));
router.post('/auth/register', (req, res) => forwardRequest(DOCTOR_SERVICE_URL, req, res));

// Protected routes (require authentication)


module.exports = router;
