const { DataTypes } = require('sequelize');
const {Database} = require('./config.connection');

exports.Languaje = Database.define('languaje', {
    lang_code: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true
    },
    lang_name: {
        type: DataTypes.STRING(300),
        allowNull: false
    }
});