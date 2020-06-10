const User = require('../models/user-model');


exports.authenticate = (req, res, next) => {
    if(req.session && req.session.userID){
        User.findById(req.session.userID, (error, match) => {
            if(error || !match) { return res.status(401).send({message: 'permision denied'}) };

            res.cookie('mail', match.email, {expires: new Date(Date.now() + (60*60*24*365*3)), httpOnly: true});
            res.cookie('pwd', match.pwd, {expires: new Date(Date.now() + (60*60*24*365*3)), httpOnly: true});
            res.cookie('userID', match._id, {expires: new Date(Date.now() + (60*60*24*365*3)), httpOnly: true});
            next();
        });
    }
    else{
        res.status(401).send({message: 'permision denied'});
    }
};

exports.isLogged = (req, res, next) => {
    if(req.cookies.mail && req.cookies.pwd && req.cookies.userID){
        User.findById(req.cookies.userID, (error, match) => {
            if(match){
                res.redirect(`/home/${match._id}`);
            }
            else{
                next();
            }
        });
    }
    else{
        next();
    }
};