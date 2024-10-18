const likeService = require('../services/like_services')

const likeController = async (req, res) => {
  const user_id = req.params.user_id;
  const cafe_id = req.params.cafe_id;

  try {
    await likeService.LikedService(user_id, cafe_id);
    res.status(200).json({ message: '좋아요 상태 변경 완료' })

  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message })
  }
}

module.exports = { likeController };