require('dotenv').config();

module.exports = {
    port: process.env.SERVER_PORT,
    mongo_usr: process.env.MONGO_USR,
    mongo_pwd: process.env.MONGO_PWD,
    mongo_db: process.env.MONGO_DB,
    mongo_port: process.env.MONGO_PORT,
    mongo_host: process.env.MONGO_HOST
}