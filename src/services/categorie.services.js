const Categories = require('../models/categories.models');

class CategorieService {
    static async getAll() {
        try {
            const result = await Categories.findAll({
                attributes:['name'],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(categories) {
        try {
            const result = await Categories.create(categories);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(field, id) {
        try {
            const result = await Categories.update(field,id);
            return result;
        } catch (error) {
            throw error;  
        }
    }

    static async delete(id) {
        try {
            const result = await Categories.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CategorieService;