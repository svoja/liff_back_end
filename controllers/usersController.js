const db = require('../models/db');

exports.getAllPackages = async (req, res) => {
  try {
    // Fetch all packages
    const packages = await db.getAllPackages();
    // Fetch all subjects
    const subjects = await db.getAllSubjects();

    // Attach packages to subjects based on subject_id
    subjects.forEach(subject => {
      subject.packages = packages.filter(pkg => pkg.subject_id === subject.id);
    });

    // Log the subjects with their attached packages for debugging
    console.log('Subjects with packages:', subjects);

    res.render('users/home', { 
      title: "BBM", 
      packages: packages,
      subjects: subjects // Pass subjects with packages to the view
    });
  } catch (error) {
    console.error('Error fetching packages:', error);
    res.status(500).send('Error fetching packages');
  }
};