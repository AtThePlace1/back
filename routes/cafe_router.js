const express = require('express')
const router = express.Router();

const cafeController = require('../controllers/cafe_controller')

router.get('/:cafe_pk', cafeController.detailController);

module.exports = router;