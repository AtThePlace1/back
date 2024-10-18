const likeDao = require('../models/like_dao')

const LikedService = async (user_id, cafe_id) => {
  const check = await likeDao.checkLiked(user_id, cafe_id)
  if (check.length > 0) {
    return await likeDao.deleteLiked(user_id, cafe_id)
  }
  else {
    return await likeDao.insertLiked(user_id, cafe_id)
  }
}

module.exports = { LikedService }