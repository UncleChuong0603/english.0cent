const bcrypt = require('bcrypt');
const { User, UserVerification } = require('../../models/User');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

exports.signup = async (req, res) => {
    let { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            status: "FAILED",
            message: "Missing input fields!"
        });
    }

    email = email.trim();
    password = password.trim();

    if (email === "" || password === "") {
        return res.json({
            status: "FAILED",
            message: "Empty input fields!"
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
            message: "Invalid password! It should contain at least one digit, one uppercase letter, one lowercase letter, and be between 6-20 characters long."
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

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            email,
            password: hashedPassword,
            verified: false
        });

        const savedUser = await newUser.save();
        await sendVerificationEmail(savedUser._id, savedUser.email);
        res.json({
            status: "SUCCESS",
            message: "User created successfully. Check your email for verification!"
        });

    } catch (err) {
        console.log(err);
        res.json({
            status: "FAILED",
            message: "An error occurred during the signup process!"
        });
    }
};


const sendVerificationEmail = async (userId, email) => {
    const currentUrl = 'http://localhost:5000';
    const uniqueString = uuidv4() + userId;
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Verify your email",
        html: `<p>Verify your email by clicking the link: <a href="${currentUrl}/auth/verify/${userId}/${uniqueString}">Click here</a></p>`
    };

    const saltRounds = 10;
    try {
        const hashedUniqueString = await bcrypt.hash(uniqueString, saltRounds);
        const newVerification = new UserVerification({
            userId,
            uniqueString: hashedUniqueString,
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000
        });

        await newVerification.save();
        console.log("Verification record saved:", newVerification);

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log("Error sending email:", err);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    } catch (error) {
        console.log("Error in sendVerificationEmail:", error);
    }
};

exports.verifyUser = async (req, res) => {
    let { userId, uniqueString } = req.params;

    try {
        console.log("Verification attempt:", { userId, uniqueString });

        const userVerificationRecords = await UserVerification.find({ userId });
        console.log("Verification records found:", userVerificationRecords);

        if (userVerificationRecords.length === 0) {
            return res.redirect(`/auth/verified?error=true&message=Account record does not exist or has already been verified. Please sign up or sign in!`);
        }

        const { expiresAt, uniqueString: hashedUniqueString } = userVerificationRecords[0];
        if (expiresAt < Date.now()) {
            await UserVerification.deleteOne({ userId });
            await User.deleteOne({ _id: userId });
            return res.redirect(`/auth/verified?error=true&message=Link has expired. Please sign up again!`);
        }

        const isMatch = await bcrypt.compare(uniqueString, hashedUniqueString);
        console.log("Unique string match result:", isMatch);

        if (!isMatch) {
            return res.redirect(`/auth/verified?error=true&message=Invalid verification details. Check your inbox!`);
        }

        await User.updateOne({ _id: userId }, { verified: true });
        await UserVerification.deleteOne({ userId });
        res.sendFile(path.join(__dirname, '..', '..', 'views', 'verified.html'));
    } catch (error) {
        console.log("Error in verification route:", error);
        res.redirect(`/auth/verified?error=true&message=An error occurred while verifying the user.`);
    }
};

exports.showVerifiedPage = (req, res) => {
    const { error, message } = req.query;
    res.sendFile(path.join(__dirname, '..', '..', 'views', 'verified.html'));
    // If you want to display the error message in the HTML file,
    // you'll need to modify your HTML file to dynamically show the message
    // or use a template engine like EJS to render the message.
};

exports.signin = async (req, res) => {
    let { email, password } = req.body;

    email = email ? email.trim() : "";
    password = password ? password.trim() : "";

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
            if (user.verified) {
                res.json({
                    status: "SUCCESS",
                    message: "User signed in successfully!"
                });
            } else {
                res.json({
                    status: "FAILED",
                    message: "User has not been verified! Please check your email."
                });
            }
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
            message: "An error occurred during the sign in process!"
        });
    }
};
