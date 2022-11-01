const { userService } = require('../services');

const userControllerInsert = async (req, res) => {
  const userData = req.body;
  const result = await userService.userServiceInsert(userData);
  res.status(200).json(result.message);
};
module.exports = {
userControllerInsert,
};