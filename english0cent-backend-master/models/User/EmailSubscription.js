const mongoose = require('mongoose');

const emailSubscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'], // basic email validation
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const EmailSubscription = mongoose.models.EmailSubscription || mongoose.model('EmailSubscription', emailSubscriptionSchema);

module.exports = EmailSubscription;