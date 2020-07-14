const { DataTypes, Deferrable } = require('sequelize');
const { Database } = require('./config.connection');
const { Category } = require('./category.model');
const { Editorial } = require('./editorial.model');
const { Languaje } = require('./languaje.model');

exports.Book = Database.define('book', {
    book_isbn: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true
    },
    book_title: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    book_synopsis: {
        type: DataTypes.STRING(2000),
        allowNull: false
    },
    cat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'cat_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    edit_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        references: {
            model: Editorial,
            key: 'edit_name',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    lang_code: {
        type: DataTypes.STRING(3),
        allowNull: false,
        references: {
            model: Languaje,
            key: 'lang_code',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    book_imageurl: {
        type: DataTypes.STRING(300),
        allowNull: true
    },
    book_pages: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    book_published: {
        type: DataTypes.DATE,
        allowNull: false
    }
});