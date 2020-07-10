const express = require('express');
let Router = express.Router();

const ctrl = require('../controllers/user.controller');

Router.get('/', (req, res) => {res.json({message: 'hola por aqui'})});

Router.post('/signup/', ctrl.new_user);

module.exports = Router;