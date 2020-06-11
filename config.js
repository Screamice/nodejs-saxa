require('dotenv').config();

const MONGO_USR = process.env.MONGO_USR;
const MONGO_PWD = process.env.MONGO_PWD;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_HOST = process.env.MONGO_HOST;

const MONGO_URI= `mongodb://${MONGO_USR}:${MONGO_PWD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

const PORT = process.env.SERVER_PORT || 4000;

const SECRET_KEY = process.env.SECRET_KEY;

const GOOGLE_ID = process.env.GOOGLE_ID;
const GOOGLE_SECRET = process.env.GOOGLE_SECRET;
const GOOGLE_REFRESH = process.env.GOOGLE_REFRESH;
const GOOGLE_ACCESS = process.env.GOOGLE_ACCESS;


module.exports = {
    PORT,
    SECRET_KEY,
    MONGO_URI,
    GOOGLE_ID,
    GOOGLE_SECRET,
    GOOGLE_REFRESH,
    GOOGLE_ACCESS
}