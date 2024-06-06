const EmailSubscription = require('../models/User/EmailSubscription');
require('../config/db'); // Ensure database connection is established

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    const subscription = new EmailSubscription({ email });
    await subscription.save();
    return res.status(201).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    if (error.code === 11000) { // Duplicate key error
      return res.status(409).json({ message: 'Email already subscribed' });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
};
