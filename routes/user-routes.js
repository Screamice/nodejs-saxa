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
        res.status(200);
        res.send({message: 'user has been registered'});
        res.redirect('/login');
        res.end();
    })
    .catch(error => {
        res.status(500);
        res.send({message: 'something went wrong in database'});
        res.end();

        console.error(error);
    });
};

exports.accountLogIn = (req, res) => {
    let data = {
        user: req.body.user,
        pwd: req.body.pwd
    }
    // Function to check if user is type username or email.
    const chooseLogin = X => /\S+@\S+/.test(X);

    // Validate the recieved data.
    if(!data.user || !data.pwd){
        return(
            res.status(400)
               .send({message: 'data-request is not valid'})
        );
    }

    if(chooseLogin(data.user)){                 // User logs with email and password.
        ctrl.emailLogIn(data)
        .then(user => {
            res.status(200);

            if(user.rol == 1){
                res.redirect('/home');
            }
            else{
                res.redirect(`/home/${user.id}`);
            }

            res.end();
        })
        .catch(error => {
            res.status(500);
            res.send({message: 'something went wrong in login'});
            res.end();

            console.error(error);
        });
    }
    else{                                       // User log s with username and password.
        ctrl.usernameLogIn(data)
        .then(user => {
            
            res.status(200);

            if(user.rol == 1){
                res.redirect('/home');
            }
            else{
                res.redirect(`/home/${user.id}`);
            }

            //res.end();
        })
        .catch(error => {
            res.status(500)
               .send({message: 'something went wrong in login'});

            console.error(error);
        });
    }
};

exports.homeAdmin = (req, res) => {
    if(req.session.loggedin){
        res.send({message: `Bienvenido ${req.session.name}`});
    }
    else {
		res.send('access denied');
	}
};

exports.homeClient = (req, res) => {

    res.render('homeClient', {title: 'Home'});
};

exports.logoutSession = (req, res) => {
};