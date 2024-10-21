const express = require('express');
const router = express.Router();

const userRouter = require('./user_router');
const mypageRouter = require('./mypage_router');
const likeRouter = require('./like_router');
const cafeRouter = require('./cafe_router');
const preferRouter = require('./prefer_router')

router.get('/ping', (_, res) => { res.send('pong') });

router.use('/users', userRouter);
router.use('/mypages', mypageRouter);
router.use('/likes', likeRouter);
router.use('/cafes', cafeRouter);
router.use('/prefers', preferRouter);

module.exports = router;