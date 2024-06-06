const express = require('express');
const router = express.Router();
const EmailSubscription = require('../../api/EmailSubscription');


router.post('/emailsubscription', EmailSubscription);

module.exports = router;
