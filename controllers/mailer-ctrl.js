const nodemailer = require('nodemailer');
const Token = require('../models/token-model');
const crypto = require('crypto');

let appAccount = nodemailer.createTestAccount();

let accountMailer = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jerrold5@ethereal.email',
        pass: 'c9c5BAJtY1ccwnX6EC'
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