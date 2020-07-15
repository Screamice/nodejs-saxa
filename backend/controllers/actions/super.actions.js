const bcrypt = require('bcryptjs');
const { Student } = require('../../models/student.model');
const { Category } = require('../../models/category.model');
const { Editorial } = require('../../models/editorial.model');
const { Author } = require('../../models/author.model');

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

exports.insert_cat = (category) => {
    return new Promise( async (resolve, reject) => {
        const statement = Category.create({ cat_name: category});

        (statement)? resolve() : reject(new Error("Couldn't insert data in database"));
    });
};

exports.insert_edit = (editorial) => {
    return new Promise( async (resolve, reject) => {
        const statement = Editorial.create({
            edit_name: editorial.name,
            edit_website: editorial.website,
            edit_logourl: editorial.logo
        });

        (statement)? resolve() : reject(new Error("Couldn't insert data in database"));
    });
};

exports.insert_auth = (author) => {
    return new Promise( async (resolve, reject) => {
        const statement = Author.create({
            auth_fname: author.fname,
            auth_lname: author.lname,
            auth_bio: author.bio,
            count_code: author.from,
            auth_imageurl: author.image
        });

        (statement)? resolve() : reject(new Error("Couldn't insert data in database"));
    });
};