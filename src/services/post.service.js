const { BlogPost, User, Category } = require('../models');

const postServiceInsert = async (id, data) => {
  const result = data;
  return { status: 200, message: result };
};

const postServiceGetAll = async () => {
  const result = await await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });
  return { status: 200, message: result };
};

const postServiceGetById = async (id) => {
  const result = await await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
        through: { attributes: [] },
      },
    ],
  });
  return { status: 200, message: result };
};

module.exports = {
  postServiceInsert,
  postServiceGetAll,
  postServiceGetById,
};
