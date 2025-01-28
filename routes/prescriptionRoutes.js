const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const forwardRequest = require('../services/requestForwarder');
const { PRESCRIPTION_SERVICE_URL} = require('../utils/env');
const router = express.Router();

router.use(authMiddleware);
router.get('/pharmacy/prescriptions/pending', (req, res) => forwardRequest(PRESCRIPTION_SERVICE_URL, req, res));
router.get('/pharmacy/prescriptions/incomplete', (req, res) => forwardRequest(PRESCRIPTION_SERVICE_URL, req, res));
router.patch('/pharmacy/prescriptions/:prescriptionId', (req, res) => forwardRequest(PRESCRIPTION_SERVICE_URL, req, res));
router.patch('/pharmacy/prescriptions/:prescriptionId/complete', (req, res) =>
    forwardRequest(PRESCRIPTION_SERVICE_URL, req, res)
);
router.get('/doctor/prescriptions/search/:tcId', (req, res) => forwardRequest(PRESCRIPTION_SERVICE_URL, req, res));

router.get('/doctor/prescriptions', (req, res) => forwardRequest(PRESCRIPTION_SERVICE_URL, req, res));
router.post('/doctor/prescriptions', (req, res) => forwardRequest(PRESCRIPTION_SERVICE_URL, req, res));
router.get('/doctor/prescriptions/tc/:tcId', (req, res) => forwardRequest(PRESCRIPTION_SERVICE_URL, req, res));
router.get('/doctor/prescriptions/:prescriptionId', (req, res) => forwardRequest(PRESCRIPTION_SERVICE_URL, req, res));
router.delete('/doctor/prescriptions/:prescriptionId', (req, res) => forwardRequest(PRESCRIPTION_SERVICE_URL, req, res));
router.patch('/doctor/prescriptions/:prescriptionId/medicines/:medicineId', (req, res) =>
    forwardRequest(PRESCRIPTION_SERVICE_URL, req, res)
);
module.exports = router;
