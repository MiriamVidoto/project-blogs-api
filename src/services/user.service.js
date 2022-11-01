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

module.exports = {
  userServiceInsert,
};
