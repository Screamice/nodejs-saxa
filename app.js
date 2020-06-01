const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const user = require('./routes/user-routes');

/* Server settings */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));

/* Shortcuts */
app.set('port', 3000);
const mongo_uri = 'mongodb://localhost:27017/sapere';

/* Server routes */
app.get('/', (req, res) => {
    res.send("Hola desde el server")
});
app.post('/signin', user.newUser);

/* Start server and database connection */
mongoose.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true},(error) => {
    (error)? console.error(error) : console.log(`Database connection successfully at ${mongo_uri}`);
    app.listen(app.get('port'), (error) => {
        (error)? console.error(error) : console.log(`Server listening on port ${app.get('port')}`);
    });
});