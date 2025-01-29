# API Gateway Service

URL: https://prescription-gateway-aqgcewarhgbshfev.canadacentral-01.azurewebsites.net
---

# Presentation

https://youtu.be/w0k5QrAZ328?si=9q1adVcuJY-5GKcI

# REST OF THE PROJECT REPOSITORIES 

https://github.com/emreutkan/prescription-frontend

https://github.com/emreutkan/notificationService

https://github.com/emreutkan/prescriptionService

https://github.com/emreutkan/medicineService

https://github.com/emreutkan/doctorservice

https://github.com/emreutkan/pharmacyService

---

## Introduction

The **API Gateway Service** serves as the central hub for the prescription management system, connecting doctor and pharmacy services. It provides unified endpoints for authentication and prescription management.

## Features

### Medicine Operations
- Search medicines by name

### Doctor Operations
- Authentication (Login/Register)
- Create and manage prescriptions
- Search prescriptions by TC ID

### Pharmacy Operations
- Authentication (Login/Register)
- Process pending prescriptions
- Manage prescription completion status
- Search prescriptions by TC ID

## Core Endpoints

### Medicine
- **GET** `/medicine/search`: Search medicines by name

### Doctor Authentication
- **POST** `/doctor/auth/login`: Login with username/password
- **POST** `/doctor/auth/register`: Register new doctor account

### Doctor Prescriptions
- **POST** `/doctor/prescriptions`: Create new prescription
- **GET** `/doctor/prescriptions`: List all prescriptions
- **GET** `/doctor/prescriptions/tc/{tcId}`: Get prescriptions by TC ID
- **DELETE** `/doctor/prescriptions/{prescriptionId}`: Delete prescription

### Pharmacy Authentication
- **POST** `/pharmacy/auth/login`: Login with email/password
- **POST** `/pharmacy/auth/register`: Register new pharmacy account

### Pharmacy Prescriptions
- **GET** `/pharmacy/prescriptions/pending`: View pending prescriptions
- **PATCH** `/pharmacy/prescriptions/{prescriptionId}`: Update prescription status
- **GET** `/pharmacy/prescriptions/incomplete`: View incomplete prescriptions
- **PATCH** `/pharmacy/prescriptions/{prescriptionId}/complete`: Mark as complete

## Security

- All endpoints protected with JWT authentication
- Token validity: 1 hour
- Role-based access control for doctors and pharmacies

For detailed request/response schemas and additional endpoints, please refer to the full API documentation.
