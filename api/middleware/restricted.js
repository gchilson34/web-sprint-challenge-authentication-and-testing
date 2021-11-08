const { JWT_SECRET } = require("../secret");
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return next({ status: 401, message: 'token required' });

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      next({ status: 401, message: 'token invalid' });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};