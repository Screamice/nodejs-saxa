const ctrl = require('../controllers/user-ctrl');
const mailer = require('../controllers/mailer-ctrl');

/* ROUTE: /signup */
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
        res.redirect('/login');
        res.end();
    })
    .catch(error => {
        res.status(500);
        res.send({message: 'something went wrong in database'});
        res.end();

        console.error(error.message);
    }); 
};

/* ROUTE: /login */
exports.accountLogIn = (req, res) => {
    let data = {
        user: req.body.user,
        pwd: req.body.pwd
    }

    // Validate the recieved data.
    if(!data.user || !data.pwd){
        return(
            res.status(400)
               .send({message: 'data-request is not valid'})
        );
    }

    ctrl.usernameSignIn(data)
    .then(user => {                                             // LogIn data is correct
        res.status(200);

        //req.session.islogged = true;
        req.session.userID = user.id;

        if(user.rol == 1){
            res.redirect('/home');
        }
        else{
            res.redirect(`/home/${user.id}`);
        }

        res.end();
    })
    .catch(error => {                                           // LogIn data is invalid
        res.status(500);
        res.send({message: 'something went wrong in login'});
        res.end();

        console.error(error);
    });
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
    req.session.destroy(error => {
        (error)? console.error(error) : res.redirect('/');
    });
};

exports.verifyAccount = (req, res) => {
    
    ctrl.setVerification(req.query.token)
    .then(() => {
        res.status(200).redirect('/login');
        res.end();
    })
    .catch(error => {
        console.error(error.message);
        res.status(500).send({message: 'no existe el token de activacion'})
    })
};