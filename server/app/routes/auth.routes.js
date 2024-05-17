const express = require('express');
const router = express.Router();
const { signup, login, logout, refreshToken } = require('../controllers/auth.controller');

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/refresh').get(refreshToken);

module.exports = router;
