const mypageService = require('../services/mypage_services');

const myPageController = async (req, res) => {
  const pk = req.params.pk;

  try {
    const myPage = await mypageService.myPageService(pk);
    return res.status(201).json({ myPage })
  }

  catch (error) {
    console.log(error)
    res.status(error.status || 500).json({ message: error.message });
  }
}

module.exports = { myPageController };