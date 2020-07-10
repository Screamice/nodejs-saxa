const Student = require('../../models/student.model');

exports.create_User = (data) => {
    return new Promise( (resolve, reject) => {
        let student = new Student({
            dni: data.dni,
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            pwd: data.pwd
        });

        student.save( (error, user) => {
            (error)? reject(error.message) : resolve(user);
        });
    });
};