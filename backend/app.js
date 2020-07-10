require('../au/node_modules/dotenv').config({path: '../.env'});
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const user_routes = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/user/', user_routes);

module.exports = app;