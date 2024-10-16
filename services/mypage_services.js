const mypageDao = require('../models/mypage_dao');

const myPageService = async (pk) => {
  return await mypageDao.getMyPageDetails(pk);
}

module.exports = { myPageService };