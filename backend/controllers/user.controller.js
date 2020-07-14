exports.new_student = (req, res) => {
    let student = {
        dni: req.body.dni,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        pwd: req.body.pwd
    };
};

exports.loggin = (req, res) => {
    let account = {
        dni: req.body.dni,
        pwd: req.body.pwd
    };

};

exports.list_accounts = (req, res) => {
    
};

exports.get_profile = (req, res) => {
    let dni = req.params.dni;

};