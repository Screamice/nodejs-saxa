const mongoose = require('mongoose');
const author = require('./author-model');

const bookModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'author',
        required: true
    }
});

module.exports = mongoose.model('Book', bookModel);