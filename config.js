require('dotenv').config();

const MONGO_USR = process.env.MONGO_USR;
const MONGO_PWD = process.env.MONGO_PWD;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_HOST = process.env.MONGO_HOST;

const MONGO_URI= `mongodb://${MONGO_USR}:${MONGO_PWD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

const PORT = process.env.SERVER_PORT || 4000;

const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    PORT,
    SECRET_KEY,
    MONGO_URI
}