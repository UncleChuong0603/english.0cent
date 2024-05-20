const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is loaded to read from .env file

console.log('MONGODB_URI:', process.env.MONGODB_URI); // Correct environment variable name
mongoose
  .connect(process.env.MONGODB_URI, { // Correct environment variable name
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
