const express = require('express')
const router = express.Router()

const userController = require('../controllers/user_controller')

router.post('/signup', userController.signUpController)

module.exports = router;