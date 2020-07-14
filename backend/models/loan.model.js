const { DataTypes, Deferrable } = require('sequelize');
const { Database } = require('./config.connection');
const { Student } = require('./student.model');
const { Book } = require('./book.model');

exports.Loan = Database.define('loan', {
    loan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    stu_dni: {
        type: DataTypes.STRING(100),
        references: {
            model: Student,
            key: 'stu_dni',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    book_isbn: {
        type: DataTypes.STRING(100),
        allowNull: false,
        references: {
            model: Book,
            key: 'book_isbn',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    loan_start: {
        type: DataTypes.DATE,
        allowNull: false
    },
    loan_end: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    timestamps: false,
    freezeTableName: true
});