// app.js or server.js
const express = require('express');
const path = require('path');
const app = express();

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// Import and use routes
const adminRoute = require('./routes/adminRoute');
const subjectTypesRoute = require('./routes/subjectTypesRoute');
const subjectsRoute = require('./routes/subjectsRoute');
const packagesRoute = require('./routes/packagesRoute');

// Mount the routes
app.use('/admin', adminRoute);
app.use('/admin/types', subjectTypesRoute);
app.use('/admin/subjects',  subjectsRoute);
app.use('/admin/packages', packagesRoute);

// Define the server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});