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

const profileController = async (req, res) => {
  const pk = req.params.pk
  const profile_url = req.body.profile_url;

  try {
    await mypageService.profileService(pk, profile_url)
    res.status(201).json({ message: "프로필 사진 추가 완료" })

  } catch (error) {
    console.log(error)
    res.status(error.statusCode || 500).json({ error: error.message })
  }
}

module.exports = { myPageController, profileController };