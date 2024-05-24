const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/Auth/UserController'); // Ensure this path is correct
const authenticateToken = require('../../middlewares/authJwt'); // Ensure this path is correct

router.post('/upgrade', authenticateToken, UserController.upgradePlan);
router.get('/profile', authenticateToken, UserController.getProfile);
router.put('/profile', authenticateToken, UserController.updateProfile);

module.exports = router;
