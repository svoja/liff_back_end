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

exports.getPackagesBySubjectId = async (req, res) => {
  try {
    const subjectId = req.params.id;

    // Await the result of getAllSubjects to get the array of subjects
    const subjects = await db.getAllSubjects();
    const subject = subjects.find(s => s.id === parseInt(subjectId));

    if (!subject) {
      return res.status(404).send('Subject not found');
    }

    // Fetch packages for the given subject ID
    const packages = await db.getPackagesBySubjectId(subjectId);
    subject.packages = packages;

    res.render('users/subject', {
      title: `BBM - ${subject.name}`,
      subject: subject
    });
  } catch (error) {
    console.error(`Error fetching packages for subject ID ${req.params.id}:`, error);
    res.status(500).send('Error fetching packages for the specified subject');
  }
};