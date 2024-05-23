const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    lessonId: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;
