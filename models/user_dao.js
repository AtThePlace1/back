const myDataSource = require('./init');

const createUser = async (email, nickName, hasedPw) => {
  return await myDataSource.query(`
    INSERT INTO users (email, nickname, password)
    VALUES (?, ?, ?)
    `
    , [email, nickName, hasedPw])
}

const getEmailByUser = async (email) => {
  const [userEmail] = await myDataSource.query(`
    SELECT email FROM users
    WHERE email = ?`
    , [email]);
  return userEmail;
}

const getNickNameByUser = async (nickName) => {
  const [userNickName] = await myDataSource.query(`
    SELECT nickname FROM users
    WHERE nickname = ?`
    , [nickName]);
  return userNickName
};

module.exports = { createUser, getEmailByUser, getNickNameByUser }