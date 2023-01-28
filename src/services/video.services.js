const Videos = require('../models/videos.models');

class VideosService {
    static async getAll() {
        try {
            const result = await Videos.findAll({
                attributes:['title', 'url'],
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(videos) {
        try {
            const result = await Videos.create(videos);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(field, id) {
        try {
            const result = await Videos.update(field,id);
            return result;
        } catch (error) {
            throw error;  
        }
    }

    static async delete(id) {
        try {
            const result = await Videos.destroy(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = VideosService;