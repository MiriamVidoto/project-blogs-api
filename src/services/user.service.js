const { User } = require('../models');
const jwt = require('../utils/jwt.util');

const userServiceInsert = async (userData) => {
  const { email } = userData;
  const isUser = await User.findOne({ where: { email } });
  if (isUser) {
    return {
      status: 409,
      message: { message: 'User already registered' },
    };
  }
  await User.create(userData);
  const { password: _, ...dataUser } = userData;
  const newToken = jwt.createToken(dataUser);
  return { status: 201, message: { token: newToken } };
};

const userServiceGetAll = async () => {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, message: result };
};

const userServiceGetById = async (id) => {
  const result = await User.findOne({ 
    where: { id },
    attributes: { exclude: ['password'] },
  });
  if (!result) {
    return {
      status: 404,
      message: { message: 'User does not exist' },
    };
  }
  return { status: 200, message: result };
};

const userServiceDelete = async (id) => {
  await User.destroy({ where: { id } });
  return { status: 204 };
};

module.exports = {
  userServiceInsert,
  userServiceGetAll,
  userServiceGetById,
  userServiceDelete,
};
