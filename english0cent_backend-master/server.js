//mongodb
require('./config/db');

const express = require("express"); // Correct import of express
const app = express(); // Initialize express

const port = 3001;

const UserRouter = require('./api/User');

// Middleware for accepting post form data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

app.use('/user', UserRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
