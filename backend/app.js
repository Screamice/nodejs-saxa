const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const super_routes = require('./routes/super.routes');
const books_routes = require('./routes/book.routes');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/sudo', super_routes);
app.use('/books', books_routes);

module.exports = app;