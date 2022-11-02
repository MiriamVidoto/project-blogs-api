const { Category } = require('../models');

const categoriesServiceInsert = async (name) => {
  await Category.create({ name });
  const result = await Category.findOne({ where: { name } });
  return { status: 201, message: result };
};

const categoriesServiceGetAll = async () => {
  const result = await Category.findAll();
  return { status: 200, message: result };
};

module.exports = {
  categoriesServiceInsert,
  categoriesServiceGetAll,
};