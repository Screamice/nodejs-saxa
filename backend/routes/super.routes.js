const express = require('express');
let Router = express.Router();

const ctrl = require('../controllers/super.controller');



// Add new student to database
Router.post('/create-student/', ctrl.new_student);

// Add new category to database - TERMINAR.
Router.post('/register-category/', ctrl.new_category);





module.exports = Router;