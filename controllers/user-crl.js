const bcrypt = require('bcryptjs');
const user = require('../models/user');

const SALT_ROUNDS = bcrypt.genSaltSync(12);

/* Insert a new user on database */
exports.insertUser = (data) => {
    return new Promise((resolve, reject) => {
        let modelUser = new user({
            fullname: data.name,
            username: data.user,
            email: data.email,
            password: bcrypt.hashSync(data.pwd, SALT_ROUNDS),
            languaje: data.lang
        });

        modelUser.save((user, error) => {
            if(error){
                resolve(user);
            }
            else{
                reject(new Error('cannot insert user in database'));
            }
        });
    });
};
/*
function insertUser(data){
    

    let flag = true;

    return(modelUser.save(error => {
        if(error){ 
            return false;
        }else{
            return true;
        }
    }));
}

module.exports = {insertUser};
*/