require('dotenv').config();
const app = require('./backend/app');
const {Database} = require('./backend/models/config.connection');

app.listen(process.env.PORT, (error) => {
    (error)? console.log(error.message) : console.log(`SERVER ENABLE ON PORT ${process.env.PORT}`);
});