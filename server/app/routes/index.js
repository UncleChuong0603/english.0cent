// routes/index.js
const express = require('express');
const router = express.Router();

// Import specific route modules
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');

// Use the routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);

module.exports = router;
