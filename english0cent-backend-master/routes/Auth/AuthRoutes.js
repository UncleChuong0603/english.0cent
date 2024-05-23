const express = require('express');
const router = express.Router();
const { AuthController } = require('../../controllers/Auth');

router.post('/signup', AuthController.signup);
router.get('/verify/:userId/:uniqueString', AuthController.verifyUser);
router.get('/verified', AuthController.showVerifiedPage);
router.post('/signin', AuthController.signin);

module.exports = router;
