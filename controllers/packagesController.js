// controllers/packagesController.js

const db = require('../models/db');

exports.getAllPackages = async (req, res) => {
  try {
    // Fetch all packages
    const packages = await db.getAllPackages();
    // Fetch all subjects for dropdown selection
    const subjects = await db.getAllSubjects();

    res.render('admin/packages', { 
      title: "BBM - Admin", 
      packages: packages,
      subjects: subjects // Pass subjects to the view
    });
  } catch (error) {
    console.error('Error fetching packages:', error);
    res.status(500).send('Error fetching packages');
  }
};

exports.createPackage = async (req, res) => {
  try {
    const { subject_id, name, price, description } = req.body;
    await db.insertPackage(subject_id, name, price, description);
    res.redirect('/admin/packages');
  } catch (error) {
    console.error('Error creating package:', error);
    res.status(500).send('Error creating package');
  }
};

exports.deletePackages = async (req, res) => {
  try {
    const selectedIds = req.body.selectedIds;
    if (Array.isArray(selectedIds)) {
      await db.deletePackagesByIds(selectedIds);
    } else if (selectedIds) {
      await db.deletePackagesByIds([selectedIds]);
    }
    res.redirect('/admin/packages');
  } catch (error) {
    console.error('Error deleting packages:', error);
    res.status(500).send('Error deleting packages');
  }
};

exports.editPackage = async (req, res) => {
  try {
    const { id, subject_id, name, price, description } = req.body;
    await db.updatePackage(id, subject_id, name, price, description);
    res.redirect('/admin/packages');
  } catch (error) {
    console.error('Error updating package:', error);
    res.status(500).send('Error updating package');
  }
};