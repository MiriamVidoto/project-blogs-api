const validateLogin = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .send({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = validateLogin;