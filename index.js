require('dotenv').config();
const app = require('./backend/app');
const mongodb = require('./backend/models/connection');

mongodb.connect(process.env.MONGO_URI, (error) => {
    (error)? console.log(error.message) : console.log(`DATABASE HAS BEEN CONNECTED SUCCESSFULLY`);
    app.listen(process.env.PORT, (error) => {
        (error)? console.log(error.message) : console.log(`SERVER ENABLE ON PORT ${process.env.PORT}`);
    });
});