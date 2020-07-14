const { DataTypes, Deferrable } = require('sequelize');
const { Database } = require('./config.connection');
const { Book } = require('./book.model');
const { Author } = require('./author.model');

exports.Book_Author = Database.define('book_author', {
    book_isbn: {
        type: DataTypes.STRING(100),
        allowNull: false,
        references: {
            model: Book,
            key: 'book_isbn',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    auth_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Author,
            key: 'auth_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
},
{
    timestamps: false,
    freezeTableName: true
});