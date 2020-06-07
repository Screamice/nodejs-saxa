/* -------------------------------------------------  M O D U L E S  ------------------------------------------------- */
const express = require('express');
const admin = require('./admin-routes');
const user = require('./user-routes');

const router = express.Router();

/* --------------------------------------------------  R O U T E S  -------------------------------------------------- */

router.get('/', (req, res) => {res.render('index', {title: 'Inicio'})});

router.get('/login', (req, res) => {res.render('login', {title: 'Log In'})});
router.post('/login', user.accountLogIn);

router.get('/signup', (req, res) => {res.render('signup', {title: 'Sign Up'})});
router.post('/signup', user.createUser);

router.get('/home', user.homeAdmin);
router.get('/home/:id', user.homeClient);

router.get('/logout', user.logoutSession);
 
router.get('/show-authors', admin.showAllAuthors);                 // Mostrar todos los autores registrados.
router.get('/detail/author/:id', admin.detailAuthor);              // Mostrar un autor en particular.
router.get('/register-author', (req, res) => {res.render('register_Author', {title: 'Register new author'})});
router.post('/register-author', admin.newAuthor);                  // Agregar un nuevo autor.
router.put('/reform/author/:id', admin.updateAuthor);              // Modificar los datos de un autor

router.post('/register-book', admin.newBook);


module.exports = router;