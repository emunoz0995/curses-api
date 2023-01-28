const Categories = require('../models/categories.models');
const Videos = require('../models/videos.models');
const Courses = require('../models/courses.models');

class CourseService {
    static async getAll() {
        try {
            const result = await Courses.findAll({
                attributes:['title','description','instructor'],
                include:[
                {
                    model: Categories, 
                    as: 'categories',
                    attributes: ['name'],
                },
                {
                    model: Videos,
                    as: 'videos',
                    attributes: ['title','url'],
                
                }],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await Courses.findByPk(id, {
                attributes:['title','description','instructor'],
                include:[
                {
                    model: Categories, 
                    as: 'categories',
                    attributes: ['name'],
                },
                {
                    model: Videos,
                    as: 'videos',
                    attributes: ['title','url'],
                
                }],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(course) {
        try {
            const result = await Courses.create(course);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, field) {
        try {
            const result = await Courses.update(field, { where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await Courses.destroy({ where: { id } });
            return result;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = CourseService;