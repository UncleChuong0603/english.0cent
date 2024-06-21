const { ProfilingLevel } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    avatar: { type: String, default: 'https://github.com/shadcn.png' },
    fullName: { type: String, default: '' },
    dateOfBirth: { type: Date, default: Date.now },
    phoneNumber: { type: String, default: '' },
    target: { type: String, default: '' },
    timeSpending: { type: Number, default: 0 },
    introduction: { type: String, default: '' },
    level: { type: String, default: 'Beginner' },
    rank: { type: Number, default: 0 },
    plan: { type: String, default: 'free' } // 'free' or 'paid'
});

const User = mongoose.model('User', userSchema);
module.exports = User;

