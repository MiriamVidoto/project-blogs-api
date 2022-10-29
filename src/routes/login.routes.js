const express = require('express');
const { loginController } = require('../controllers');
const validateLogin = require('../middlewares/loginValidations');

const loginRoute = express.Router();

loginRoute.post('/', validateLogin, loginController);

module.exports = loginRoute;