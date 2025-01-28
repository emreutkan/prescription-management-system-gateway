require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 4000,
    DOCTOR_SERVICE_URL: process.env.DOCTOR_SERVICE_URL || 'http://localhost:3001/api/v1',
    PHARMACY_SERVICE_URL: process.env.PHARMACY_SERVICE_URL || 'http://localhost:8080/api/v1',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key',
    MEDICINE_SERVICE_URL: process.env.MEDICINE_SERVICE_URL || 'http://localhost:3002/api/v1',
    PRESCRIPTION_SERVICE_URL: process.env.PRESCRIPTION_SERVICE_URL || 'http://localhost:3003/api/v1',
    verifyToken: (token) => require('jsonwebtoken').verify(token, process.env.JWT_SECRET),
};
