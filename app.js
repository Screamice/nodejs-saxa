const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const admin = require('./routes/admin-routes');

/* Server settings */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));

/* Shortcuts */
app.set('port', 3000);
const mongo_uri = 'mongodb://localhost:27017/sapere';

/* Server routes */
app.post('/register-author', admin.newAuthor);
app.get('/show-authors', admin.showAllAuthors);
app.get('/detail/author/:id', admin.detailAuthor);
app.put('/reform/author/:id', admin.updateAuthor);

/* Start server and database connection */
mongoose.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true},(error) => {
    (error)? console.error(error) : console.log(`Database connection successfully at ${mongo_uri}`);
    app.listen(app.get('port'), (error) => {
        (error)? console.error(error) : console.log(`Server listening on port ${app.get('port')}`);
    });
});