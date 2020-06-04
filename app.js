const key = require('./config');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const routes = require('./routes/routes');


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
const mongo_uri = `mongodb://${key.mongo_usr}:${key.mongo_pwd}@${key.mongo_host}:${key.mongo_port}/${key.mongo_db}`;


/* Server routes */
app.use('/', routes);



/* Start server and database connection */
mongoose.connect(mongo_uri, {useNewUrlParser: true, useUnifiedTopology: true},(error) => {

    (error)? console.error(error) : console.log(`Database connection successfully at ${mongo_uri}`);

    app.listen(key.port, (error) => {

        (error)? console.error(error) : console.log(`Server listening on port ${key.port}`);
    });
});