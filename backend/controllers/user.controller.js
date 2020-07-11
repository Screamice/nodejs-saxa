const actions = require('./actions/student.actions');

exports.new_student = (req, res) => {
    let student = {
        dni: req.body.dni,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        pwd: req.body.pwd
    };

    actions.create_User(student)
    .then(() => {
        res.status(200);
        res.json({ action: 'success', message: 'user has been created'});
    })
    .catch(error => {
        res.status(500);
        res.json({action: 'failed', message: `No. ${error.message}`});
    });
};

exports.loggin = (req, res) => {
    let account = {
        dni: req.body.dni,
        pwd: req.body.pwd
    };

    actions.check_loggin(account)
    .then(student => {
        res.status(200);
        res.json({action: 'success', message: 'user has been login'});
    })
    .catch(error => {
        res.status(500);
        res.json({action: 'failed', message: error.message});
    });
};

exports.list_accounts = (req, res) => {
    actions.get_all_accounts()
    .then(profiles => {
        res.status(200);
        res.json({action: 'succes', profiles: profiles});
    })
    .catch(error => {
        res.status(500);
        res.json({action: 'failed', message: error.message});
    });
};

exports.get_profile = (req, res) => {
    let dni = req.params.dni;

    actions.find_profile(dni)
    .then(student => {
        res.status(200);
        res.json({action: 'success', student: student});
    })
    .catch(error => {
        res.status(500);
        res.json({action: 'failed', message: error.message});
    });
};