const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserVerificationSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId to reference User collection
        required: true,
        ref: 'User'
    },
    uniqueString: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('UserVerification', UserVerificationSchema);
