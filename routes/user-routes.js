const ctrl = require('../controllers/user-ctrl');

exports.createUser = (req, res) => {
    let data = {
        name: req.body.name,
        lastname: req.body.lastname,
        user: req.body.user,
        email: req.body.email,
        pwd: req.body.pwd
    };

    // Validate the recieved data.
    if(!data.name || !data.lastname || !data.user || !data.email || !data.pwd){
        return(
            res.status(400)
               .send({message: 'data-request is not valid'})
        );
    }

    ctrl.insertUser(data)
    .then(() => {
        res.status(200)
           .send({message: 'user has been registered'});
    })
    .catch(error => {
        res.status(500)
           .send({message: 'something went wrong in database'});

        console.error(error);
    });
};

exports.accountLogIn = (req, res) => {
    let data = {
        user: req.body.user,
        pwd: req.body.pwd
    }
    const chooseLogin = X => /\S+@\S+/.test(X);

    if(!data.user || !data.pwd){
        return(
            res.status(400)
               .send({message: 'data-request is not valid 1'})
        );
    }

    if(chooseLogin(data.user)){
        ctrl.emailLogIn(data)
        .then(user => {
            res.status(200)
               .send(user)
        })
        .catch(error => {
            res.status(500)
               .send({message: 'something went wrong in database 2'});

            console.error(error);
        });
    }
    else{
        ctrl.usernameLogIn(data)
        .then(user => {
            res.status(200)
               .send(user)
        })
        .catch(error => {
            res.status(500)
               .send({message: 'something went wrong in database 2'});

            console.error(error);
        });
    }
};