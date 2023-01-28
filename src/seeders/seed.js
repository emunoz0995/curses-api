const db = require('../utils/database');
const Users = require('../models/users.model');
const Courses = require('../models/courses.models');
const Categories = require('../models/categories.models');
const Videos = require('../models/videos.models');

const users = [
    {
        firstName:'Edison',
        lastName:'Muñoz',
        email: 'javicho16_mu@hotmail.com',
        password: '1234'
    },
    {
        firstName:'Karol Aguirre',
        lastName:'Muñoz',
        email: 'kaguirre@hotmail.com',
        password: '1234'
    },
    {
        firstName:'Brando',
        lastName:'Huera',
        email: 'bhuera@hotmail.com',
        password: '1234'
    }
];

const courses = [
    {
        title: 'Desarrollo Web',
        description: ' Aprender Reac, NodeJs',
        instructor:'Ian Rosas',
        userId: 1  
    },
    {
        title: 'Desarrollo Web con Python',
        description: ' Aprender a usar pyton',
        instructor:'Ian Rosas',
        userId: 1  
    },
    {
        title: 'Pintar uñas',
        description: ' Aprender a pintar uñas como profecional',
        instructor:'Diana Torres',
        userId: 2 
    },
    
]

const categories = [

    {name: 'Programacion', courseId:1},
    {name: 'Eduscacion', courseId:1},
    {name: 'Trabajo', courseId:2},
    {name: 'Belleza', courseId:2},
    {name: 'Cosina', courseId:3},
    {name: 'Manejo', courseId:3},

]

const videos = [
    {title: 'Programacion Reac', url:'www.peefcorporation.com', courseId:1},
    {title: 'Programacion Piton', url:'www.peefcorporation.com', courseId:1},
    {title: 'Pitar Uñas', url:'www.peefcorporation.com', courseId:2},
    {title: 'Pintar Cabello', url:'www.peefcorporation.com', courseId:2},
    {title: 'Cosinar', url:'www.peefcorporation.com', courseId:3},
    {title: 'Cosinar huevo', url:'www.peefcorporation.com', courseId:3}
    
]

db.sync({force: true})

.then(() => {
 console.log('Iniciando Insert');
    
      users.forEach((user) => Users.create(user));

      setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
      },100);

      setTimeout(() => {
        categories.forEach((categorie) => Categories.create(categorie));
        },200);

        setTimeout(() => {
            videos.forEach((video) => Videos.create(video));
            },300);
     
})
.catch(error => console.log(error));