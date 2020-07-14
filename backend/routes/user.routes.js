const express = require('express');
let Router = express.Router();

const ctrl = require('../controllers/user.controller');




Router.post('/signup/', ctrl.new_student);

Router.post('/login/', ctrl.loggin);

Router.get('/list-all-profiles/', ctrl.list_accounts);

Router.get('/profile/:dni', ctrl.get_profile);




module.exports = Router;