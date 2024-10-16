const userDao = require('../models/user_dao');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRETKEY

const signUpService = async (email, nickName, pwd) => {

  const REQUIRED_KEYS = { email, nickName, pwd };
  Object.keys(REQUIRED_KEYS).map((key) => {
    if (!REQUIRED_KEYS[key]) {
      const error = new Error(`${key}를 입력하세요`);
      error.statusCode = 400;
      throw error;
    }
  })

  const emailFormCheck =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (emailFormCheck.test(email) == false) {
    const error = new Error('이메일 형식이 올바르지 않습니다.');
    error.statusCode = 400;
    throw error;
  }

  const passwordFormCheck =
    /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
  if (passwordFormCheck.test(pwd) == false) {
    const error = new Error('비밀번호 형식이 올바르지 않습니다.');
    error.statusCode = 400;
    throw error;
  }

  const emailDupCheck = await userDao.getEmailByUser(email)
  if (emailDupCheck) {
    const error = new Error('중복된 이메일 입니다')
    error.statusCode = 400;
    throw error;
  };

  const nickNameDupCheck = await userDao.getNickNameByUser(nickName)
  if (nickNameDupCheck) {
    const error = new Error('중복된 닉네임 입니다')
    error.statusCode = 400;
    throw error;
  }

  const salt = bcrypt.genSaltSync(12);
  const hashedPw = bcrypt.hashSync(pwd, salt);

  const createUser = await userDao.createUser(email, nickName, hashedPw);
  return createUser;
};

const logInService = async (email, pwd) => {
  const REQUIRED_KEYS = { email, pwd };
  Object.keys(REQUIRED_KEYS).map((key) => {
    if (!REQUIRED_KEYS[key]) {
      const error = new Error(`${key}를 입력하세요`);
      error.statusCode = 400;
      throw error;
    }
  });

  const emailFormCheck =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (emailFormCheck.test(email) == false) {
    const error = new Error('이메일 형식이 올바르지 않습니다.');
    error.statusCode = 400;
    throw error;
  }

  const findEmail = await userDao.getEmailByUser(email)

  if (!findEmail) {
    const error = new Error('존재하지 않는 이메일입니다.')
    error.statusCode = 400;
    throw error;
  }

  const InfoLogin = await userDao.logIn(email);
  const isPwdCorrect = bcrypt.compareSync(pwd, InfoLogin.password)

  if (!isPwdCorrect) {
    const error = new Error('비밀번호가 일치하지 않습니다')
    error.statusCode = 400
    throw error
  }

  if (InfoLogin.email && isPwdCorrect) {
    const token = jwt.sign({ email: InfoLogin.email }, SECRET_KEY)
    return {
      user_pk: InfoLogin.id,
      accessToken: token
    };
  }
}

module.exports = { signUpService, logInService }