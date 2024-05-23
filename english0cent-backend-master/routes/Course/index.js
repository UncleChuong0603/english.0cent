const express = require('express');
const router = express.Router();

// Import individual route files
const courseRoutes = require('./courseRoutes');
const mockTestRoutes = require('./mockTestRoutes');
const finalTestRoutes = require('./finalTestRoutes');

// Use the routes
router.use('/course', courseRoutes);
router.use('/mock-test', mockTestRoutes);
router.use('/final-test', finalTestRoutes);

module.exports = router;
