const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    mockTest: { type: String },
    finalTest: { type: String }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
