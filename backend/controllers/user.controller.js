
exports.new_student = (req, res) => {
    let student = {
        dni: req.body.dni,
        name: req.body.name,
        lastname: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

};