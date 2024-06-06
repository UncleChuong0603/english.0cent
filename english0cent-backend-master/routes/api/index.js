const express = require('express');
const router = express.Router();

const EmailSubscriptionRoutes = require('./EmailSubscriptionRoutes');

router.use('/api', EmailSubscriptionRoutes);

module.exports = router;
