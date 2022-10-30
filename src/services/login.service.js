const { User } = require('../models');
const jwt = require('../utils/jwt.util');

const loginService = async (loginData) => {
  const { email, password } = loginData;
  const result = await User.findOne({ where: { email } });
  if (result && result.password === password) {
    const { password: _, ...dataUser } = result.dataValues;
    const token = jwt.createToken(dataUser);
    return {
      status: 200,
      message: { token },
    };
  }
  return {
    status: 400,
    message: { message: 'Invalid fields' },
  };
};

module.exports = loginService;