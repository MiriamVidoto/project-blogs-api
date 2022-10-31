const { userService } = require('../services');

const userControllerInsert = (req, res) => {
  const userData = req.body;
  const result = userService.userServiceInsert(userData);
  res.status(200).json(result);
};
module.exports = {
userControllerInsert,
};