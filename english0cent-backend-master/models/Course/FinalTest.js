const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const finalTestSchema = new Schema({
    title: { type: String, required: true },
    questions: [{ type: String, required: true }],
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true }
});

const FinalTest = mongoose.model('FinalTest', finalTestSchema);
module.exports = FinalTest;
