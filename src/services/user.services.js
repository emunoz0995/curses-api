const Courses = require('../models/courses.models');
const Users = require('../models/users.model');

class UserService {
    static async getAll() {
        try {
            const result = await Users.findAll({
                attributes:['firstName','lastName','email'],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await Users.findByPk(id,{
                attributes:['firstName','lastName','email'],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getWithCourse(id) {
        try {
            const result = await Users.findOne({
                where: {id},
                attributes:['firstName','lastName','email'],
                include:{
                    model: Courses,
                    as: 'courses',
                    attributes: ['title'],
                }
            });
            return result;
        } catch (error) {
           throw error; 
        }
    }

    static async create(user) {
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(field, id) {
        try {
            const result = await Users.update(field,id);
            return result;
        } catch (error) {
            throw error;  
        }
    }

    static async delete(id) {
        try {
            const result = await Users.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;