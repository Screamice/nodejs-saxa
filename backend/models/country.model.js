const { DataTypes, Deferrable } = require('sequelize');
const { Database } = require('./config.connection');
const { Languaje } = require('./languaje.model');

exports.Country = Database.define('country', {
    count_code: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true
    },
    count_name: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    lang_code: {
        type: DataTypes.STRING(3),
        references: {
            model: Languaje,
            key: 'lang_code',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
},
{
    timestamps: false,
    freezeTableName: true
});