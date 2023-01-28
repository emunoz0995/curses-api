const CategorieService = require('../services/categorie.services');

const getAllCategories = async (req , res) =>{
    try {
        const result = await CategorieService.getAll();
        res.status(200).json(result);
     } catch (error) {
        res.status(400).json(error.message);
     }
}


const createCategories = async ( req, res) =>{
    try {
        const categories = req.body;
        const result = await CategorieService.create(categories);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
    
}

const updateCategories = async ( req, res ) => {
    try {
        const { id } = req.params;
        const field  = req.body;
        const result = await CategorieService.update(id ,field);
        res.status(200).json(result);        
    } catch (error) {
        res.status(400).json(error.message);   
    }
}

const deleteCategories = async( req, res) =>{
    try {
        const { id } = req.params;
        const result =  await CategorieService.delete(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllCategories,
    updateCategories,
    createCategories,
    deleteCategories,
};