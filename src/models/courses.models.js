const db = require('../utils/database');
const { DataTypes } = require('sequelize');


const Courses = db.define('courses', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instructor: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',    
    },
  
});

module.exports = Courses;