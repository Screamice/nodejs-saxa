const User = require('../models/user-model');
const bcrypt = require('bcryptjs');
const mailer = require('./mailer-ctrl');

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

        userModel.save((error, user) => {

            if(error){
                reject(error);
            }
            else{
                
                let context = {
                    destiny: user.email,
                    subject: 'Verification email for ethereal account',
                    text: `Hi ${user.user}\n
                           This is a verification email for your ethereal account\n
                           To verify yor account, please visit this page\n
                           \thttp://127.0.0.1:3000/verification?token=${mailer.createToken(user._id)}`
                };

                mailer.sendMail(context);
                resolve();
            }
        });
    });
};

exports.usernameSignIn = (data) => {
    return new Promise((resolve, reject) => {

        // Function to validate if user is an email or username.
        const chooseLogin = X => /\S+@\S+/.test(X);

        // Choose if the query is about email or username.
        let query = (chooseLogin(data.user))? {email: data.user} : {user: data.user};

        User.findOne(query, (error, match) => {
            
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
};  // 1591562329821