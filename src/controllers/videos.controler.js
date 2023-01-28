const VideosService = require('../services/video.services');

const getAllVideos = async (req , res) =>{
    try {
        const result = await VideosService.getAll();
        res.status(200).json(result);
     } catch (error) {
        res.status(400).json(error.message);
     }
}


const createVideos = async ( req, res) =>{
    try {
        const videos = req.body;
        const result = await VideosService.create(videos);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
    
}

const updateVideos = async ( req, res ) => {
    try {
        const { id } = req.params;
        const field  = req.body;
        const result = await VideosService.update(id ,field);
        res.status(200).json(result);        
    } catch (error) {
        res.status(400).json(error.message);   
    }
}

const deleteVideos = async( req, res) =>{
    try {
        const { id } = req.params;
        const result =  await VideosService.delete(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllVideos,
    updateVideos,
    createVideos,
    deleteVideos,
};