const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    languaje: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userModel);