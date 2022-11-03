const { validateToken } = require('../utils/jwt.util');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }
  const user = validateToken(authorization);
  req.user = user;
  if (user.name === 'erro') {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
  next();
};

module.exports = tokenValidation;
