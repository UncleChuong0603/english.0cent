const express = require("express");
const router = express.Router();
const { authJwt } = require("../middlewares");
const authController = require("../controllers/auth.controller");

// Routes for authentication
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authJwt.verifyToken, authController.logout);
router.post("/refresh-token", authController.refreshToken);

module.exports = router;
