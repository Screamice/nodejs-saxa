const controller = require('../controllers/user-crl');

exports.newUser = (req, res) => {
    let data = {
        name: req.body.name,
        user: req.body.user,
        email: req.body.email,
        pwd: req.body.pwd,
        lang: req.body.lang
    };
    

    if(!data.name && !data.user && !data.email && !data.pwd && !data.lang){
        return(
            res.status(400)
               .send({message: 'the request-data is not correct'})
        );
    }

    if(controller.insertUser(data)){
        return(
            res.status(200)
               .send({message: 'new user has been registered'})
        );
    }
    else{
        res(
            res.status(400)
               .send({message: 'request-data is not correct'})
        );
    }
};