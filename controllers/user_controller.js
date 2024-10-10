const userService = require('../services/user_services');

const signUpController = async (req, res) => {
  const { email, nickName, pwd } = req.body;

  if (!(email && nickName && pwd)) {
    res.status(400).json({ error: 'INPUT VALUE EMPTY' });
    return;
  }

  try {
    await userService.signUpService(email, nickName, pwd);
    res.status(201).json({ message: 'USER_CREATED' });
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).json({ error: error.meassage });
  }
}

module.exports = { signUpController }