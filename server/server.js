const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dbConfig = require("./app/config/db.config");

// Set up server
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello!" });
});

// Connect to the database
const db = require("./app/models");
const Role = db.role;

mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// Function to initialize database
async function initial() {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count === 0) {
      await new Role({ name: "user" }).save();
      console.log('Added "user" to roles collection');

      await new Role({ name: "moderator" }).save();
      console.log('Added "moderator" to roles collection');

      await new Role({ name: "admin" }).save();
      console.log('Added "admin" to roles collection');
    }
  } catch (err) {
    console.error("Error in initial function:", err);
  }
}

// Require and use routes
const authRoutes = require("./app/routes/auth.routes");
const userRoutes = require("./app/routes/user.routes");

app.use("/api/auth", authRoutes); // Mount auth routes under /api/auth path
app.use("/api/user", userRoutes); // Mount user routes under /api/user path

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
