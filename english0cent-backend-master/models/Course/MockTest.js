const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mockTestSchema = new Schema({
    title: { type: String, required: true },
    questions: [{ type: String, required: true }],
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true }
});

const MockTest = mongoose.model('MockTest', mockTestSchema);
module.exports = MockTest;
