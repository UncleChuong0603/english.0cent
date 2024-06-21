const jwt = require('jsonwebtoken');
require('dotenv').config(); // Ensure this line is present to load environment variables

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({
            status: "FAILED",
            message: "No token provided!"
        });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({
                status: "FAILED",
                message: "Failed to authenticate token!"
            });
        }

        req.user = { id: user.userId }; // Ensure the user ID is extracted correctly
        next();
    });
};

module.exports = authenticateToken;
