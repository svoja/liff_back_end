const express = require('express');
const router = express.Router();

// Users route
router.get('/', (req, res) => {
  console.log("Users route hit");  // Log to check if route is reached
  res.render('users/home', { title: 'BBM | Home' });
});

module.exports = router;