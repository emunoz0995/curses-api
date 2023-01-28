const express = require('express');
const db = require('./utils/database');
const initModels = require ('./models/init.models');
const userRoutes = require('./routes/users.routes');
const courseRoutes = require('./routes/courses.routes');
const categoriesRoutes = require('./routes/categories.routes');
const videosRoutes = require('./routes/videos.routes');

const app = express();
app.use(express.json());

const PORT = 8000;

db.authenticate()
.then(() => console.log('Autenticacion exitosa'))
.catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra db
db.sync({force: false}) //devuelve una promesa
 .then(() => console.log('Base de datos sincronizada'))
 .catch((error) => console.log(error));

app.get('/', (req, res)=> {
    res.status(200).json({message: 'Bienvenidos al servidor'});
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', courseRoutes); 
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1', videosRoutes);

app.listen(PORT, () => {
 console.log(`Servidor escuchando en el puerto ${PORT}`)
});