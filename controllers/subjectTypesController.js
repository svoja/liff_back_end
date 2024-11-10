// controllers/subjectTypesController.js

const db = require('../models/db');

// Controller functions
exports.getAllSubjectTypes = async (req, res) => {
  try {
    const subjectTypes = await db.getAllSubjectTypes();
    res.render('admin/subjectTypes', { 
        title: "BBM - Admin", 
        subjectTypes: subjectTypes
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
};

exports.createSubjectType = async (req, res) => {
  try {
    const { name } = req.body;
    await db.insertSubjectType(name);
    res.redirect('/admin/types');
  } catch (error) {
    console.error('Error creating subject type:', error);
    res.status(500).send('Error creating subject type');
  }
};

exports.deleteSubjectTypes = async (req, res) => {
  try {
    const selectedIds = req.body.selectedIds;
    if (Array.isArray(selectedIds)) {
      await db.deleteSubjectTypesByIds(selectedIds);
    } else if (selectedIds) {
      await db.deleteSubjectTypesByIds([selectedIds]);
    }
    res.redirect('/admin/types');
  } catch (error) {
    console.error('Error deleting subject types:', error);
    res.status(500).send('Error deleting subject types');
  }
};

exports.editSubjectType = async (req, res) => {
  try {
    const { id, name } = req.body;
    await db.updateSubjectType(id, name);
    res.redirect('/admin/types');
  } catch (error) {
    console.error('Error updating subject type:', error);
    res.status(500).send('Error updating subject type');
  }
};