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

    controller.insertUser(data)
    .then(() => {
        res.status(200);
        res.send({message: 'user has been registered'});
    })
    .catch(error => {
        console.error(error);
        res.status(400);
        res.send({message: 'hasta afuera no se pudo'});
    });
};

exports.emailLogIn = (req, res) => {
    let email = req.body.email;
    let pwd = req.body.pwd;

    if(!email && !pwd){
        return(
            res.status(400)
               .send({message: 'the request-data is not correct'})
        );
    }
};