const express = require('express');
const tokenValidation = require('../middlewares/tokenValidations');
const { categoriesController } = require('../controllers');
const { validateName } = require('../middlewares/categoriesValidations');

const categoriesRoutes = express.Router();

categoriesRoutes.post('/',
tokenValidation,
validateName,
categoriesController.categoriesControllerInsert);

categoriesRoutes.get('/',
  tokenValidation,
  categoriesController.categoriesControllerGetAll);

module.exports = categoriesRoutes;