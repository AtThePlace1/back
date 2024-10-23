const express = require('express')
const router = express.Router();

const cafeController = require('../controllers/cafe_controller')

router.get('/:cafe_pk', cafeController.detailController);
router.get('/map/all', cafeController.mapController);

module.exports = router;