const userDao = require('../models/user_dao');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRETKEY

const isAuthenticated = async (req, res, next) => {
  const accessToken = req.headers['authorization'];

  try {
    if (!accessToken) {
      res.status(401).json({ error: 'TOKEN_NOT_PROVIDED' });
      return;
    }

    const userObj = await jwt.verify(accessToken, SECRET_KEY);
    const userData = await userDao.getEmailByUser(userObj.email);

    if (userData) {
      return next();
    } else {
      const error = new Error('NO_USER')
      error.statusCode = 400
      throw error
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'INVALID_TOKEN' });
  }
};

module.exports = { isAuthenticated };