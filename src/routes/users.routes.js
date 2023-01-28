const { Router } = require('express');
const { 
    getAllUsers,
    getUserById,
    getUserWithCourses,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/users.controler');


const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

//obtener a u usuario con sus tareas

router.get('/users/:id/courses',  getUserWithCourses);

router.post("/users", createUser);

router.put("/users/:id",  updateUser);

router.delete("/users/:id", deleteUser);


module.exports = router;