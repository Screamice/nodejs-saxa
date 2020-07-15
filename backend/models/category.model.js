const { DataTypes } = require('sequelize');
const { Database } = require('./config.connection');

exports.Category = Database.define('category', {
    cat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cat_name: {
        type: DataTypes.STRING(500),
        allowNull: false
    }
},
{
    timestamps: false,
    freezeTableName: true
});