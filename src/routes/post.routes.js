const express = require('express');
const { postController } = require('../controllers');
const tokenValidation = require('../middlewares/tokenValidations');

const postRoutes = express.Router();

postRoutes.post('/',
  tokenValidation,
  postController.postControllerInsert);

postRoutes.get('/',
  tokenValidation,
  postController.postControllerGetAll);

postRoutes.get('/:id',
  tokenValidation,
  postController.postControllerGetById);

module.exports = postRoutes;