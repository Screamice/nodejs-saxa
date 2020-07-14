const { DataTypes, Deferrable } = require('sequelize');
const { Database } = require('./config.connection');

exports.Student = Database.define('student', {
    stu_dni: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true
    },
    stu_fname: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    stu_lname: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    stu_email: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    stu_password: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    stu_imageurl: {
        type: DataTypes.STRING(300),
        allowNull: true
    }
},
{
    timestamps: false,
    freezeTableName: true
});