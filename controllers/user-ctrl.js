const User = require('../models/user-model');
const Token = require('../models/token-model');
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
            pwd: data.pwd,
            rol: 2
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

exports.emailLogIn = (data) => {
    return new Promise((resolve, reject) => {
        User.findOne({email: data.user}, (error, match) => {
            if(error){
                reject(error);
            }

            if(!match){
                reject(new Error('wrong user or password'));
            }

            if(!bcrypt.compareSync(data.pwd, match.pwd)){
                reject(new Error('wrong user or password'));
            }
            else{
                let response = {
                    id: match._id,
                    name: match.name,
                    lastname: match.lastname,
                    user: match.user,
                    email: match.email
                }
                resolve(response);
            }
        });
    });
};

exports.usernameLogIn = (data) => {
    return new Promise((resolve, reject) => {
        User.findOne({user: data.user}, (error, match) => {
            if(error){
                reject(error);
            }

            if(!match){
                reject(new Error('wrong user or password'));
            }

            if(!bcrypt.compareSync(data.pwd, match.pwd)){
                reject(new Error('wrong user or password'));
            }
            else{
                let response = {
                    id: match._id,
                    name: match.name,
                    lastname: match.lastname,
                    user: match.user,
                    email: match.email
                }
                resolve(response);
            }
        });
    });
};