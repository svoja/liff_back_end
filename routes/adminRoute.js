// routes/adminRoute.js

const express = require('express');
const router = express.Router();

// Admin dashboard route
router.get('/', (req, res) => {
  try {
    res.render('admin/dashboard', { title: "BBM - Admin" });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

module.exports = router;