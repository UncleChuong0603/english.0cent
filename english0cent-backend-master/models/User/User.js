const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    plan: { type: String, default: 'free' } // 'free' or 'paid'
});

const User = mongoose.model('User', userSchema);
module.exports = User;
