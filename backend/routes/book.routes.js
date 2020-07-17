const express = require('express');
let Router = express.Router();

const ctrl = require('../controllers/book.controller');


// List all available books.
Router.get('/available/', ctrl.get_books);

// Search by isbn.
Router.get('/description/:isbn', ctrl.get_by_isbn);

// Search by title.
Router.get('/', ctrl.get_by_title);

// Search by category.
Router.get('/', ctrl.get_by_category);

// Search by editorial.
Router.get('/', ctrl.get_by_editorial);

// Search by lang.
Router.get('/', ctrl.get_by_lang);


module.exports = Router;