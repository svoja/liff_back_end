// controllers/subjectsController.js

const db = require('../models/db');

exports.getAllSubjects = async (req, res) => {
    try {
      // Fetch all subjects
      const subjects = await db.getAllSubjects();
      // Fetch all subject types
      const subjectTypes = await db.getAllSubjectTypes();
      
      res.render('admin/subjects', { 
          title: "BBM - Admin", 
          subjects: subjects,
          subjectTypes: subjectTypes // Pass subject types to the view
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
    }
};

exports.createSubject = async (req, res) => {
  try {
    const { name, description, img_url, type_id } = req.body;
    await db.insertSubject(name, description, img_url, type_id);
    res.redirect('/admin/subjects');
  } catch (error) {
    console.error('Error creating subject:', error);
    res.status(500).send('Error creating subject');
  }
};

exports.deleteSubjects = async (req, res) => {
  try {
    const selectedIds = req.body.selectedIds;
    if (Array.isArray(selectedIds)) {
      await db.deleteSubjectsByIds(selectedIds);
    } else if (selectedIds) {
      await db.deleteSubjectsByIds([selectedIds]);
    }
    res.redirect('/admin/subjects');
  } catch (error) {
    console.error('Error deleting subjects:', error);
    res.status(500).send('Error deleting subjects');
  }
};

exports.editSubject = async (req, res) => {
  try {
    const { id, name, description, img_url, type_id } = req.body;
    await db.updateSubject(id, name, description, img_url, type_id);
    res.redirect('/admin/subjects');
  } catch (error) {
    console.error('Error updating subject:', error);
    res.status(500).send('Error updating subject');
  }
};