const express = require("express");
const router = express.Router();
const { authJwt } = require("../middlewares");
const userController = require("../controllers/user.controller");

// Routes for user management
router.get("/profile", authJwt.verifyToken, userController.getUserProfile);
router.put("/profile", authJwt.verifyToken, userController.updateUserProfile);
router.delete("/profile", authJwt.verifyToken, userController.deleteUserProfile);

module.exports = router;
