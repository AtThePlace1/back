const express = require('express');
const mypageController = require('../controllers/mypage_controller');
const router = express.Router();

router.get('/:pk', mypageController.myPageController);

module.exports = router;

