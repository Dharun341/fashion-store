const jwt = require('jsonwebtoken');

const requireAdmin = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }

    if (decoded.isAdmin) {
      req.userId = decoded.userId;
      next();
    } else {
      return res.status(403).json({ message: 'Admin access required' });
    }
  });
};

module.exports = requireAdmin;