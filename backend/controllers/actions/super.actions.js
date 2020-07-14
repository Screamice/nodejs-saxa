const bcrypt = require('bcryptjs');
const { Student } = require('../../models/student.model');

exports.insert = (student) => {
    return new Promise( async (resolve, reject) => {

        const statement = await Student.create({
            stu_dni: student.dni,
            stu_fname: student.fname,
            stu_lname: student.lname,
            stu_email: student.email,
            stu_password: bcrypt.hashSync(student.pwd, 12),
            stu_imageurl: student.imageurl
        });
    
        if(statement){
            resolve();
        }
        else{
            reject(new Error("Couldn't insert data in database"));
        }
    });
};