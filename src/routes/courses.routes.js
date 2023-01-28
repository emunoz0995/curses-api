const { Router }  = require('express');

const {
    getAllCourses,
    getCourseById,
    updateCourse,
    createCourse,
    deleteCourse,
} = require('../controllers/course.controler');


const router = Router();
router.get('/courses',  getAllCourses);
router.get('/courses/:id', getCourseById);
router.post('/courses',  updateCourse);
router.put('/courses/:id',  createCourse);
router.delete('/courses/:id',  deleteCourse);

module.exports = router; 