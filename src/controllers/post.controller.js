const { postService } = require('../services');

const postControllerInsert = async (req, res) => {
  const data = req.body;
  const result = await postService.postServiceInsert(data);
  res.status(result.status).json(result.message);
};

const postControllerGetAll = async (_req, res) => {
  const result = await postService.postServiceGetAll();
  res.status(result.status).json(result.message);
};

module.exports = {
  postControllerInsert,
  postControllerGetAll,
};
