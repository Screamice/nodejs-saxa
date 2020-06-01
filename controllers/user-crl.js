const bcrypt = require('bcryptjs');
const user = require('../models/user');

const SALT_ROUNDS = bcrypt.genSaltSync(12);

/* Insert a new user on database */
function insertUser(data){
    let modelUser = new user({
        fullname: data.name,
        username: data.user,
        email: data.email,
        password: bcrypt.hashSync(data.pwd, SALT_ROUNDS),
        languaje: data.lang
    });

    let flag = true;

    modelUser.save(error => {
        if(error){
            console.error(error);
            flag = false;
        }
    });

    return flag;
}

module.exports = {insertUser};