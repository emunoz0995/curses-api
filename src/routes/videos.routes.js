const { Router }  = require('express');

const {
    getAllVideos,
    updateVideos,
    createVideos,
    deleteVideos,
} = require('../controllers/videos.controler');


const router = Router();
router.get('/videos',  getAllVideos);
router.post('/videos',  updateVideos);
router.put('/videos/:id',  createVideos);
router.delete('/videos/:id',  deleteVideos);

module.exports = router; 