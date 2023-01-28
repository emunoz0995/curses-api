const { Sequelize } = require('sequelize');

const db = new Sequelize({

    database: 'cursosapi_db',
    username: 'postgres',
    host: 'localhost',
    port: '5432',
    password: 'root',
    dialect: 'postgres',
    logging: false, // la base que estamos usando
    //dialectOptions: { ssl: {require: true, rejectUnauthorized: false}}

});

module.exports = db;