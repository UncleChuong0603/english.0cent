const express = require('express');
const router = express.Router();
const mockTestController = require('../../controllers/Course/MockTestController');

router.post('/mock-test', mockTestController.createMockTest);
router.get('/mock-test/:mockTestId', mockTestController.getMockTest);

module.exports = router;
