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

const logInController = async (req, res) => {
  const { email, pwd } = req.body;

  try {
    const token = await userService.logInService(email, pwd);
    res.status(201).json({ message: '로그인 완료', token })
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).json({ error: error.message })
  }
}

module.exports = { signUpController, logInController }