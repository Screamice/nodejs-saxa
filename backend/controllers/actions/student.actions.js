const bcrypt = require('bcryptjs');
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

        student.save(error => {
            if(error){
                reject(error);
            }
            else{
                resolve();
            }
        });
    });
};

exports.check_loggin = (account) => {
    return new Promise( (resolve, reject) => {
        Student.findOne({dni: account.dni}, (error, student) => {
            if(error || !student || !bcrypt.compareSync(account.pwd, student.pwd)){
                reject(new Error('Wrong DNI or password'));
            }
            else{
                let finded = {
                    dni: student.dni,
                    name: student.name,
                    lastname: student.lastname,
                    email: student.email
                };
                resolve(finded);
            }
        });
    });
};

exports.get_all_accounts = () => {
    return new Promise( (resolve, reject) => {
        Student.find({}, "dni name lastname email", (error, accounts) => {
            if(error || !accounts){
                reject(new Error('cannot find any registered accounts'));
            }
            else{
                resolve(accounts);
            }
        });
    });
};

exports.find_profile = (dni) => {
    return new Promise( (resolve, reject) => {
        Student.findById({dni: dni}, "dni name lastname email",(error, student) => {
            if(error || !student){
                reject(new Error('Wrong DNI, cannot find student whith dni provided'));
            }
            else{
                resolve(student);
            }
        });
    });
};