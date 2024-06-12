const Feedback = require('../models/Input/Feedback');
require('../config/db'); // Ensure database connection is established

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide name, email, and message' });
  }

  try {
    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    return res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
