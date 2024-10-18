const express = require('express')
const checkAuth = require('../middlewares/authorization')
const router = express.Router();

const likeController = require('../controllers/like_controller');

router.post('/:user_id/:cafe_id', checkAuth.isAuthenticated, likeController.likeController)

module.exports = router;