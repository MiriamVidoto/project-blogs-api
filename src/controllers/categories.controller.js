const { categoriesService } = require('../services');

const categoriesControllerInsert = async (req, res) => {
  const { name } = req.body;
  const result = await categoriesService.categoriesServiceInsert(name);
  res.status(result.status).json(result.message);
};

const categoriesControllerGetAll = async (_req, res) => {
  const result = await categoriesService.categoriesServiceGetAll();
  res.status(result.status).json(result.message);
};

module.exports = {
  categoriesControllerInsert,
  categoriesControllerGetAll,
};