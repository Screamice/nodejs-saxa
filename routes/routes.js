/* -------------------------------------------------  M O D U L E S  ------------------------------------------------- */
const express = require('express');
const admin = require('./admin-routes');
const user = require('./user-routes');

const router = express.Router();

/* --------------------------------------------------  R O U T E S  -------------------------------------------------- */
router.get('/show-authors', admin.showAllAuthors);                 // Mostrar todos los autores registrados.
router.get('/detail/author/:id', admin.detailAuthor);              // Mostrar un autor en particular.
router.get('/register-author', (req, res) => {res.render('register_Author', {title: 'Register new author'})});
router.post('/register-author', admin.newAuthor);                  // Agregar un nuevo autor.
router.put('/reform/author/:id', admin.updateAuthor);              // Modificar los datos de un autor

router.post('/register-book', admin.newBook);

router.get('/signup', user.createUser);

module.exports = router;