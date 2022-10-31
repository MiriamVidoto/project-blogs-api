const { User } = require('../models');

const userServiceInsert = async (userData) => {
  const result = await User.create(userData);
  return result;
};

module.exports = {
  userServiceInsert,
};
