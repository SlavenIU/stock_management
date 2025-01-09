const express = require('express');
const { getDataByType } = require('../controllers/dataController');
const router = express.Router();

router.get('/:type/:id', getDataByType);

module.exports = router;
