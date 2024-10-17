const mypageDao = require('../models/mypage_dao');

const myPageService = async (pk) => {

  const findUser = await mypageDao.getPkByUser(pk);

  if (!findUser.length) {
    const error = new Error('존재하지 않는 사용자입니다.')
    error.statusCode = 400;
    throw error;
  }

  return await mypageDao.getMyPageDetails(pk);
}

module.exports = { myPageService };