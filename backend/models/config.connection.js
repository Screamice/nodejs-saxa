const path = require('path');
require('dotenv').config({path: path.join(__dirname, '..', '..', '.env')});
const {Sequelize} = require('sequelize');

let user = process.env.MySQL_USR;
let pwd = process.env.MySQL_PWD;
let db_name = process.env.MySQL_DB;

let database = new Sequelize(`mysql://${user}:${pwd}@localhost:3306/${db_name}`);

module.exports = {
    Database: database
}