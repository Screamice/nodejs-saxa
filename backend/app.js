require('dotenv').config({path: '../.env'});
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const super_routes = require('./routes/super.routes');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/sudo/', super_routes);

module.exports = app;