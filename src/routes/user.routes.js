const express = require('express');
const { userController } = require('../controllers');
const tokenValidation = require('../middlewares/tokenValidations');

const userRoutes = express.Router();

userRoutes.post('/', tokenValidation, userController.userControllerInsert);

module.exports = userRoutes;
