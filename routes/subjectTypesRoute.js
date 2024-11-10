// routes/subjectTypesRoute.js

const express = require('express');
const router = express.Router();
const subjectTypesController = require('../controllers/subjectTypesController');

// Route to display all subject types
router.get('/', subjectTypesController.getAllSubjectTypes);

// Route to create a new subject type
router.post('/create', subjectTypesController.createSubjectType);

// Route to delete selected subject types
router.post('/delete', subjectTypesController.deleteSubjectTypes);

// Route to edit an existing subject type
router.post('/edit', subjectTypesController.editSubjectType);

module.exports = router;