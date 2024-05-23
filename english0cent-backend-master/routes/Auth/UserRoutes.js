const express = require('express');
const router = express.Router();
const { UserController } = require('../../controllers/Auth');
const { isAuthenticated } = require('../../middlewares/authMiddleware');

router.post('/upgrade', isAuthenticated, UserController.upgradePlan);
router.get('/profile', isAuthenticated, UserController.getProfile);
router.put('/profile', isAuthenticated, UserController.updateProfile);
router.post('/deactivate', isAuthenticated, UserController.deactivateAccount);
router.delete('/delete', isAuthenticated, UserController.deleteAccount);

module.exports = router;
