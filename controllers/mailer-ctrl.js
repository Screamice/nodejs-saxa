const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const Token = require('../models/token-model');
const crypto = require('crypto');
const KEYS = require('../config');


let accountMailer = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'test.personal.dev@gmail.com',
        clientId: KEYS.GOOGLE_ID,
        clientSecret: KEYS.GOOGLE_SECRET,
        refreshToken: KEYS.GOOGLE_REFRESH
    }
});

exports.sendMail = (context) => {
    
    let data = {
        from: '"Ethereal Inc." <accounts@ethereal.com>',
        to: context.destiny,
        subject: context.subject,
        text: context.text
    };

    accountMailer.sendMail(data, function(error){
        if(error){ console.error(error.message) }
    });
}

exports.createToken = (userID) => {

    let code = crypto.randomBytes(16).toString('hex');

    const validator = new Token({
        userID: userID,
        token: code
    });

    validator.save(error => {
        if(error){
            console.error(error.message);
        }
        
    });
    return code;
};

//module.exports = nodemailer.createTransport(mailConfig);