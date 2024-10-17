const express = require('express');
const mypageController = require('../controllers/mypage_controller');
const checkAuth = require('../middlewares/authorization')
const router = express.Router();

router.get('/:pk', checkAuth.isAuthenticated, mypageController.myPageController);

module.exports = router;

