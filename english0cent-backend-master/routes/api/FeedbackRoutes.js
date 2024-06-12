const express = require('express');
const router = express.Router();
const Feedback = require('../../api/feedback');

router.post('/feedback', Feedback);

module.exports = router;
