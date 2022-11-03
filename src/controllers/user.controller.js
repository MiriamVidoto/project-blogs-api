const { userService } = require('../services');

const userControllerInsert = async (req, res) => {
  const userData = req.body;
  const result = await userService.userServiceInsert(userData);
  res.status(result.status).json(result.message);
};

const userControllerGetAll = async (_req, res) => {
  const result = await userService.userServiceGetAll();
  res.status(result.status).json(result.message);
};

const userControllerGetById = async (req, res) => {
  const { id } = req.params;
  const result = await userService.userServiceGetById(id);
  res.status(result.status).json(result.message);
};

const userControllerDelete = async (req, res) => {
  const { user } = req;
  const result = await userService.userServiceDelete(user.id);
  res.status(result.status).end();
};

module.exports = {
  userControllerInsert,
  userControllerGetAll,
  userControllerGetById,
  userControllerDelete,
};