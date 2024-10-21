const express = require('express');
const router = express.Router();

const preferController = require('../controllers/prefer_controller');

router.get('', preferController.userPreferController);

module.exports = router;
