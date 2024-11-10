
const express = require('express');
const router = express.Router();
const subjectsController = require('../controllers/subjectsController');

// Route to display all subjects
router.get('/', subjectsController.getAllSubjects);

// Route to create a new subject
router.post('/create', subjectsController.createSubject);

// Route to delete selected subjects
router.post('/delete', subjectsController.deleteSubjects);

// Route to edit an existing subject
router.post('/edit', subjectsController.editSubject);

module.exports = router;