const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.getAllPackages);

router.get('/:id', usersController.getPackagesBySubjectId);

module.exports = router;