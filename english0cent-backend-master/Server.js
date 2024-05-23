// Import necessary modules and configurations
require('./config/db');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Add body-parser
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors({ origin: 'http://localhost:3000' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Auth & User routes
const AuthRouter = require('./routes/Auth');
app.use('/', AuthRouter);

// Course routes
const CourseRouter = require('./routes/Course');
app.use('/', CourseRouter);
