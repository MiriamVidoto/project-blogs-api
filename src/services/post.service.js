const { BlogPost } = require('../models');

const postServiceInsert = async (data) => {
  const result = data;
  return { status: 200, message: result };
};

const postServiceGetAll = async () => {
  const result = await await BlogPost.findAll();
  return { status: 200, message: result };
};

module.exports = {
  postServiceInsert,
  postServiceGetAll,
};
