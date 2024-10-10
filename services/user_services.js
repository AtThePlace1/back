const userDao = require('../models/user_dao');
const bcrypt = require('bcryptjs');

const signUpService = async (email, nickName, pwd) => {

  const userEmail = await userDao.getEmailByUser(email);
  const userNickName = await userDao.getNickNameByUser(nickName);

  if (userEmail) {
    const error = new Error('EMAIL EXISTED')
    error.statuscode = 400;
    throw error;
  }

  else if (userNickName) {
    const error = new Error('NICKNAME EXISTED')
    error.statuscode = 400;
    throw error;
  }

  const salt = bcrypt.genSaltSync(12);
  const hashedPw = bcrypt.hashSync(pwd, salt);

  await userDao.createUser(email, nickName, hashedPw);
  return;
}

module.exports = { signUpService }