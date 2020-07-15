const { DataTypes, Deferrable } = require('sequelize');
const { Database } = require('./config.connection');
const { Country } = require('./country.model');

exports.Author = Database.define('author', {
    auth_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    auth_fname: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    auth_lname: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    auth_bio: {
        type: DataTypes.STRING(2000),
        allowNull: false
    },
    count_code: {
        type: DataTypes.STRING(3),
        allowNull: false,
        references: {
            model: Country,
            key: 'count_code',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    auth_imageurl: {
        type: DataTypes.STRING(300),
        allowNull: true
    }
},
{
    timestamps: false,
    freezeTableName: true
});