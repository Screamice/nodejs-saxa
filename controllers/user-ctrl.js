const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

const ROUNDS = 12;

/* Inser a new user in database */
exports.insertUser = (data) => {
    return new Promise((resolve, reject) => {
        let userModel = new User({
            name: data.name,
            lastname: data.lastname,
            user: data.user,
            email: data.email,
            pwd: bcrypt.hashSync(data.pwd, ROUNDS)
        });

        userModel.save(error => {
            if(error){
                reject(error);
            }
            else{
                resolve();
            }
        });
    });
};