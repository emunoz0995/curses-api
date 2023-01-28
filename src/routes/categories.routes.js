const { Router }  = require('express');

const {
    getAllCategories,
    updateCategories,
    createCategories,
    deleteCategories,
} = require('../controllers/categories.controler');


const router = Router();
router.get('/categories',  getAllCategories);
router.post('/categories',  updateCategories);
router.put('/categories/:id',  createCategories);
router.delete('/categories/:id',  deleteCategories);

module.exports = router; 