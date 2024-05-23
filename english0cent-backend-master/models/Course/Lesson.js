const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true }
});

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
