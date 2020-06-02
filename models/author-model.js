const mongoose = require('mongoose');

const authorModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    birth: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Author', authorModel);