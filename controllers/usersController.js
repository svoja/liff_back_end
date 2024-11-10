const db = require('../models/db');

exports.getAllUsersData = async (req, res) => {
  try {
    // Fetch all packages
    const packages = await db.getAllPackages();
    // Fetch all subjects for dropdown selection
    const subjects = await db.getAllSubjects();

    res.render('users/home', { 
      title: "BBM", 
      packages: packages,
      subjects: subjects // Pass subjects to the view
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
};