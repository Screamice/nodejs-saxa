
/* -----------------------------------------------   M O D U L E S  -----------------------------------------------  */

const key = require('./config');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const routes = require('./routes/routes');


/* ----------------------------------------  S E R V E R   S E T T I N G S  ---------------------------------------- */

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));


/* Cookies settings */
// dih>l_Yz97%)90Z6W+sDqpm})77~XXi4JB1voSMFQlPF3YRzfkS*>0)nEU:GJbWf5jRqx4772Flu6Y03Klcrd

/* -----------------------------------------  V I E W S   S E T T I N G S  ----------------------------------------- */
app.set('view engine', 'pug');
app.use(express.static('public'));


/* ------------------------------------------  S E R V E R   R O U T E S  ------------------------------------------ */
app.use('/', routes);


/* ---------------------------------  R U N   S E R V E R   C O N N E C T I O N S  --------------------------------- */

mongoose.connect(key.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},(error) => {

    (error)? console.error(error) : console.log(`Database connection successfully at ${key.MONGO_URI}`);

    app.listen(key.PORT, (error) => {

        (error)? console.error(error) : console.log(`Server listening on port ${key.PORT}`);
        //console.log(key.MONGO_URI);
    });
});