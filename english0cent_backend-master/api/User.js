const express = require('express');
const router = express.Router();
const User = require('../models/User'); // MongoDB user model
const bcrypt = require('bcrypt');

// Signup
router.post('/signup', async (req, res) => {
    let { name, email, password, dateOfBirth } = req.body;

    // Check if any required field is missing or undefined
    if (!name || !email || !password || !dateOfBirth) {
        return res.json({
            status: "FAILED",
            message: "Missing input fields!"
        });
    }

    // Trim whitespace from inputs if they are defined
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth = dateOfBirth.trim();

    if (name === "" || email === "" || password === "" || dateOfBirth === "") {
        return res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    }

    if (!/^[a-zA-Z\s]*$/.test(name)) {
        return res.json({
            status: "FAILED",
            message: "Invalid name!"
        });
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return res.json({
            status: "FAILED",
            message: "Invalid email!"
        });
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
        return res.json({
            status: "FAILED",
            message: "Invalid password!"
        });
    }

    if (!/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(dateOfBirth)) {
        return res.json({
            status: "FAILED",
            message: "Invalid date of birth!"
        });
    }

    if (password.length < 8 || password.length > 20) {
        return res.json({
            status: "FAILED",
            message: "Password must be between 8 and 20 characters!"
        });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({
                status: "FAILED",
                message: "User with provided email already exists!"
            });
        }

        // Password hashing using bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            dateOfBirth
        });

        await newUser.save();

        res.json({
            status: "SUCCESS",
            message: "User created successfully!"
        });

    } catch (err) {
        console.log(err);
        res.json({
            status: "FAILED",
            message: "An error occurred during the signup process!"
        });
    }
});

// Signin
router.post('/signin', async (req, res) => {
    let { email, password } = req.body;

    // Trim whitespace from inputs if they are defined
    email = email ? email.trim() : "";
    password = password ? password.trim() : "";

    // Check if any required field is missing or undefined
    if (!email || !password) {
        return res.json({
            status: "FAILED",
            message: "Empty credentials supplied!"
        });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                status: "FAILED",
                message: "Invalid credentials!"
            });
        }

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            res.json({
                status: "SUCCESS",
                message: "User signed in successfully!"
            });
        } else {
            res.json({
                status: "FAILED",
                message: "Invalid credentials!"
            });
        }

    } catch (err) {
        console.log(err);
        res.json({
            status: "FAILED",
            message: "An error occurred during the signin process!"
        });
    }
});

module.exports = router;
