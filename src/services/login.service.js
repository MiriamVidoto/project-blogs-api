const { User } = require('../models');

const loginService = async (loginData) => {
  const { email } = loginData;
  const result = await User.findOne({ where: { email } });
  if (result) {
    return {
      status: 200,
      message: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      },
    };
  }
  return {
    status: 400,
    message: { message: 'Invalid fields' },
  };
};

module.exports = loginService;