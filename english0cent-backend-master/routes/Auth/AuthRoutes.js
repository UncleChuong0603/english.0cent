const express = require('express');
const router = express.Router();
const { AuthController } = require('../../controllers/Auth');
const authenticateToken = require('../../middlewares/authJwt');


router.post('/signup', AuthController.signup);
router.get('/verify/:userId/:uniqueString', AuthController.verifyUser);
router.get('/verified', AuthController.showVerifiedPage);

router.post('/signin', AuthController.signin);
router.post('/signout', AuthController.signout); // Add this line

module.exports = router;
