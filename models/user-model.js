const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Token = require('./token-model');
const crypto = require('crypto');
const mailer = require('../controllers/mailer');

const ROUNDS = 12;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name field must be required']
    },
    lastname: {
        type: String,
        trim: true,
        required: [true, 'Lastname field must be required']
    },
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email field must be required'],
        lowercase: true,
        unique: true
    },
    pwd: {
        type: String,
        required: [true, 'Password field must be required']
    },
    rol: {
        type: Number,
        require: true,
    },
    pwdResetToken: String,
    pwdResetTokenExpires: Date,
    verified: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', function(next){
    if(this.isModified('pwd')){
        this.pwd = bcrypt.hashSync(this.pwd, ROUNDS);
    }

    next();
});

userSchema.methods.validPassword = function(pwd){
    return bcrypt.compareSync(pwd, this.pwd);
}

module.exports = mongoose.model('User', userSchema);