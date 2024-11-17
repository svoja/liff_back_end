const db = require('../models/db');

exports.getAllPackages = async (req, res) => {
  try {
    const packages = await db.getAllPackages();
    const subjects = await db.getAllSubjects();

    // Attach packages to subjects
    subjects.forEach(subject => {
      subject.packages = packages.filter(pkg => pkg.subject_id === subject.id);
    });

    res.render('users/home', { 
      title: "BBM", 
      packages: packages,
      subjects: subjects
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
};