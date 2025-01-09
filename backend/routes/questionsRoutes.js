const express = require('express');
const { getQuestionsByType, getQuestionDetails } = require('../controllers/questionsController');
const router = express.Router();

router.get('/:type/:id', getQuestionsByType);
router.get('/details/:id', getQuestionDetails);

module.exports = router;
