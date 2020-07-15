const express = require('express');
let Router = express.Router();

const ctrl = require('../controllers/super.controller');



// Add new student to database
Router.post('/student/', ctrl.new_student);

// Add new category to database.
Router.post('/category/', ctrl.new_category);

// Add new editorial to database.
Router.post('/editorial/', ctrl.new_editorial);

// Add new book to database.
Router.post('/book/', ctrl.new_book);

// Add new autor to database.
Router.post('/author/', ctrl.new_author);



module.exports = Router;