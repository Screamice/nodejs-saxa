const { DataTypes } = require('sequelize');
const { Database } = require('./config.connection');

exports.Editorial = Database.define('editorial', {
    edit_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true
    },
    edit_website: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    edit_logourl: {
        type: DataTypes.STRING(500),
        allowNull: true
    }
});