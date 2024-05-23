const express = require('express');
const router = express.Router();
const courseController = require('../../controllers/Course/CourseController');

router.post('/', courseController.getAllCourse);
router.get('/:courseId', courseController.getAllLesson);
router.post('/:courseId/lesson', courseController.getAllExercise);
router.post('/:courseId/:lessonId/:exerciseId', courseController.getExercise);

module.exports = router;
