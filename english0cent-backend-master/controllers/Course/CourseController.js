const Course = require('../../models/Course/Course');

exports.getAllCourse = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching courses', error: err.message });
    }
};

exports.getAllLesson = async (req, res) => {
    const { courseId } = req.params;
    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course.lessons);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching lessons for course', error: err.message });
    }
};

exports.getAllExercise = async (req, res) => {
    const { courseId } = req.params;
    const { lessonId } = req.body;
    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        const lesson = course.lessons.id(lessonId);
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        res.status(200).json(lesson.exercises);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching exercises for lesson', error: err.message });
    }
};

exports.getExercise = async (req, res) => {
    const { courseId, lessonId, exerciseId } = req.params;
    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        const lesson = course.lessons.id(lessonId);
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        const exercise = lesson.exercises.id(exerciseId);
        if (!exercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        res.status(200).json(exercise);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching exercise', error: err.message });
    }
};
