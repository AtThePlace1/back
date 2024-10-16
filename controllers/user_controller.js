const userService = require('../services/user_services');

const signUpController = async (req, res) => {
  const { email, nickName, pwd } = req.body;

  try {
    await userService.signUpService(email, nickName, pwd);
    res.status(201).json({ message: '회원가입 완료' });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).json({ error: error.meassage });
  }
}

module.exports = { signUpController }