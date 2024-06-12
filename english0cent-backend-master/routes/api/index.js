const express = require('express');
const router = express.Router();

const EmailSubscriptionRoutes = require('./EmailSubscriptionRoutes');
const FeedbackRoutes = require('./FeedbackRoutes');

router.use('/api', EmailSubscriptionRoutes);
router.use('/api', FeedbackRoutes);

module.exports = router;
