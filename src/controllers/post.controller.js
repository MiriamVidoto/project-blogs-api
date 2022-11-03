const { postService } = require('../services');

const postControllerInsert = async (req, res) => {
  const { id } = req.user;
  const data = req.body;
  const result = await postService.postServiceInsert(id, data);
  res.status(result.status).json(result.message);
};

const postControllerGetAll = async (_req, res) => {
  const result = await postService.postServiceGetAll();
  res.status(result.status).json(result.message);
};

const postControllerGetById = async (req, res) => {
  const { id } = req.params;
  const result = await postService.postServiceGetById(id);
  res.status(result.status).json(result.message);
};

module.exports = {
  postControllerInsert,
  postControllerGetAll,
  postControllerGetById,
};
