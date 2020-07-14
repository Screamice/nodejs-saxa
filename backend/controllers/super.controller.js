const ctrl = require('./actions/super.actions');

exports.new_student = (req, res) => {
    let student = {
        dni: req.body.dni,
        fname: req.body.name,
        lname: req.body.lastname,
        email: req.body.email,
        pwd: req.body.pwd,
        imageurl: null
    };

    if(student.dni && student.fname && student.lname && student.email && student.pwd){
        ctrl.insert(student)
        .then(() => {
            res.status(200);
            res.json({action: 'success', message: 'student has been registered'});
        })
        .catch(error => {
            res.status(500);
            res.json({action: 'failed', message: error.message});
        });
    }
    else{
        res.status(400);
        res.json({action: 'failed', message: 'data request is not correct'});
    }
};

exports.new_category = (req, res) => {
    
};