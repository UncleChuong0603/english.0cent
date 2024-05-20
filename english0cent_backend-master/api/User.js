const express = require('express');
const router = express.Router();

// mongodb user modal
const User = require('../models/User');

// Password handler
const bcrypt = require('bcrypt');

// Signup
router.post('/signup', (req, res) => {
    let { name, email, password, dateOfBirth } = req.body;

    // Check if any required field is missing or undefined
    if (!name || !email || !password || !dateOfBirth) {
        res.json({
            status: "FAILED",
            message: "Missing input fields!"
        });
        return;
    }

    // Trim whitespace from inputs if they are defined
    name = name ? name.trim() : "";
    email = email ? email.trim() : "";
    password = password ? password.trim() : "";
    dateOfBirth = dateOfBirth ? dateOfBirth.trim() : "";

    if (name === "" || email === "" || password === "" || dateOfBirth === "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
        res.json({
            status: "FAILED",
            message: "Invalid name!"
        });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "Invalid email!"
        });
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
        res.json({
            status: "FAILED",
            message: "Invalid password!"
        });
    } else if (!/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(dateOfBirth)) {
        res.json({
            status: "FAILED",
            message: "Invalid date of birth!"
        });
    } else if (password.length < 8 || password.length > 20) {
        res.json({
            status: "FAILED",
            message: "Password must be between 8 and 20 characters!"
        });
    } else {
        // Check if user already exists
        User.find({ email }).then(result => {
            if (result.length) {
                // An user already exists
                res.json({
                    status: "FAILED",
                    message: "User with provided email already exists!"
                });
            } else {
                // User doesn't exist
                
                // Password hashing using bcrypt
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds)
                    .then((hashedPassword) => {
                        const newUser = new User({
                            name,
                            email,
                            password: hashedPassword,
                            dateOfBirth
                        });

                        newUser.save()
                            .then(() => {
                                res.json({
                                    status: "SUCCESS",
                                    message: "User created successfully!"
                                });
                            })
                            .catch((err) => {
                                console.log(err);
                                res.json({
                                    status: "FAILED",
                                    message: "An error occurred during saving user account!"
                                });
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.json({
                            status: "FAILED",
                            message: "An error occurred during password hashing!"
                        });
                    });
            }
        }).catch((err) => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occurred during checking for existing user!"
            });
        });
    }
});

// Signin
router.post('/signin', (req, res) => {
    // Implement signin logic here
});

module.exports = router;
