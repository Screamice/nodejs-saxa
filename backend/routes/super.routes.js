const express = require('express');
let Router = express.Router();

const ctrl = require('../controllers/super.controller');



// Add new student to database
Router.post('/create-student/', ctrl.new_student);

// Add new category to database.
Router.post('/register-category/', ctrl.new_category);

// Add new editorial to database.
Router.post('/register-editorial/', ctrl.new_editorial);

// Add new book to database.


// Add new autor to database.





module.exports = Router;