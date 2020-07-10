const mongoose = require('mongoose');

exports.connect = (database_uri, callback) => {
    mongoose.connect(database_uri, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
        (error)? callback(new Error(`Cannot connect to database, ${error.message}`)) : callback();
    });
};