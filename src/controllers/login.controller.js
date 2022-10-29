const { loginService } = require('../services');

const loginController = async (req, res) => {
  const loginData = req.body;
  const result = await loginService(loginData);
  res.status(result.status).json(result.message);
};

module.exports = loginController;
