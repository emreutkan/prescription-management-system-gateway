const express = require('express');
const cors = require('cors');
const { PORT, DOCTOR_SERVICE_URL, PHARMACY_SERVICE_URL, PRESCRIPTION_SERVICE_URL, MEDICINE_SERVICE_URL } = require('./utils/env');
require('cors');
require('swagger-ui-express');
const yaml = require('yamljs');
require('path');
const dotenv = require('dotenv');
const {serve, setup} = require("swagger-ui-express");
const {join} = require("node:path");
dotenv.config();



const app = express();

app.use(express.json());
app.use(cors());
const swaggerDocument = yaml.load(join(__dirname, 'swagger.yaml'));

app.use('/swagger', serve, setup(swaggerDocument));

app.get('/', (req, res) => {
    res.redirect('/swagger');
});


const doctorRoutes = require('./routes/doctorRoutes');
const pharmacyRoutes = require('./routes/pharmacyRoutes');
const searchRoutes = require('./routes/searchRoutes');
const prescriptionRoutes = require('./routes/prescriptionRoutes');
// Doctor Service Routes
app.use('/doctor', doctorRoutes);
app.use('/pharmacy', pharmacyRoutes);
app.use('/medicine', searchRoutes);
app.use('/', prescriptionRoutes);


// Start Gateway
app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
    console.log(`Doctor Service URL: ${DOCTOR_SERVICE_URL}`);
    console.log(`Pharmacy Service URL: ${PHARMACY_SERVICE_URL}`);
    console.log(`Medicine Service URL: ${MEDICINE_SERVICE_URL}`);
    console.log(`Prescription Service URL: ${PRESCRIPTION_SERVICE_URL}`);
});

