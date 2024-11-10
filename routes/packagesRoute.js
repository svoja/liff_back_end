// routes/packagesRoute.js

const express = require('express');
const router = express.Router();
const packagesController = require('../controllers/packagesController');

// Route to display all packages
router.get('/', packagesController.getAllPackages);

// Route to create a new package
router.post('/create', packagesController.createPackage);

// Route to delete selected packages
router.post('/delete', packagesController.deletePackages);

// Route to edit an existing package
router.post('/edit', packagesController.editPackage);

module.exports = router;