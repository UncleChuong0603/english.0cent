const express = require('express');
const router = express.Router();
const finalTestController = require('../../controllers/Course/FinalTestController');

router.post('/final-test', finalTestController.createFinalTest);
router.get('/final-test/:finalTestId', finalTestController.getFinalTest);

module.exports = router;
