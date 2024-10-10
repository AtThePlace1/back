const myDataSource = require('./init');

const createUser = async (email, nickName, pwd) => {
  return await myDataSource.query(`
    INSERT INTO users (email, nickname, password)
    VALUES (?, ?, ?)
    `
    , [email, nickName, pwd])
}

const getEmailByUser = async email => {
  const [queryRes] = await myDataSource.query(
    `SELECT email FROM users WHERE email = ?`,
    [email]
  );
  return queryRes;
}

const getNickNameByUser = async nickName => {
  const [queryRes] = await myDataSource.query(
    `SELECT nickname FROM users WHERE nickname = ?`,
    [nickName]
  );
  return queryRes;
}

module.exports = { createUser, getEmailByUser, getNickNameByUser }