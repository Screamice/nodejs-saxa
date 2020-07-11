const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const studentSchema = mongoose.Schema({
    dni: {
        type: String,
        trim: true,
        required: [true, 'DNI field must be required'],
        unique: true
    },
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
    }
});

studentSchema.pre('save', function(next) {
    if(this.isModified('pwd')){
        this.pwd = bcrypt.hashSync(this.pwd, 12);
    }
    next();
});

module.exports = mongoose.model('Student', studentSchema);