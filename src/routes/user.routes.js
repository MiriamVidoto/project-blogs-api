const express = require('express');
const { userController } = require('../controllers');
// const tokenValidation = require('../middlewares/tokenValidations');
const { validateDisplayName,
  validateEmail,
  validatePassword, 
} = require('../middlewares/userValidation');

const userRoutes = express.Router();

userRoutes.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  userController.userControllerInsert);

module.exports = userRoutes;
