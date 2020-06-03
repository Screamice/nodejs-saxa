const config = require('./config');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const admin = require('./routes/admin-routes');


/* Server settings */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));


/* Views settings */
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
//app.use('views', path.join(__dirname, 'views'));


/* Shortcuts */
const mongo_uri = `mongodb://${config.mongo_usr}:${config.mongo_pwd}@${config.mongo_host}:${config.mongo_port}/${config.mongo_db}`;


/* Server routes */
app.get('/show-authors', admin.showAllAuthors);                 // Mostrar todos los autores registrados.
app.get('/detail/author/:id', admin.detailAuthor);              // Mostrar un autor en particular.
app.get('/register-author', (req, res) => {res.render('register_Author', {title: 'Register new author'})});
app.post('/register-author', admin.newAuthor);                  // Agregar un nuevo autor.
app.put('/reform/author/:id', admin.updateAuthor);              // Modificar los datos de un autor

app.post('/register-book', admin.newBook);


/* Start server and database connection */
mongoose.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true},(error) => {

    (error)? console.error(error) : console.log(`Database connection successfully at ${mongo_uri}`);

    app.listen(config.port, (error) => {

        (error)? console.error(error) : console.log(`Server listening on port ${config.port}`);
    });
});