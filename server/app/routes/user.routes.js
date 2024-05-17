const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller.js");

// Get single user by id
router.get("/:id", UserController.getUserProfile);

// Update user by id
router.put("/:id", UserController.updateUserProfile);

// Delete user by id
router.delete("/:id", UserController.deleteUserProfile);

module.exports = router;
