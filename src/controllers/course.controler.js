const CourseService = require('../services/course.services');

const getAllCourses = async (req , res) =>{
    try {
        const result = await CourseService.getAll();
        res.status(200).json(result);
     } catch (error) {
        res.status(400).json(error.message);
     }
}

const getCourseById = async (req,res) => {
    try {
        const { id } = req.params;
        const result = await CourseService.getById(id);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json(error.message);
      }
}

const getCourseWithCategory = async ( req, res) => {
    try {
        const { id } = req.params;
        const result = await CourseService.getWithCategory(id)
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message); 
    }
}

const createCourse = async ( req, res) =>{
    try {
        const course = req.body;
        const result = await CourseService.create(course);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
    
}

const updateCourse = async ( req, res ) => {
    try {
        const { id } = req.params;
        const field  = req.body;
        const result = await CourseService.update(id ,field);
        res.status(200).json(result);        
    } catch (error) {
        res.status(400).json(error.message);   
    }
}

const deleteCourse = async( req, res) =>{
    try {
        const { id } = req.params;
        const result =  await CourseService.delete(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllCourses,
    getCourseById,
    getCourseWithCategory,
    updateCourse,
    createCourse,
    deleteCourse,
};