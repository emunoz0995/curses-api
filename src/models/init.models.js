const Users = require('./users.model');
const Categories = require('./categories.models');
const Courses = require('./courses.models');
const Videos = require('./videos.models');
const UsersCourses = require('./userCourses.model');

const initModels = () => {

    Courses.belongsTo(Users, {as:'author', foreignKey: 'userId'});
    Users.hasMany(Courses, {as: 'courses', foreignKey: 'userId'});

    UsersCourses.belongsTo(Users, {as: 'user_course', foreignKey: 'userId'});
    Users.hasMany(UsersCourses, {as: 'course_user', foreignKey: 'userId'});

    UsersCourses.belongsTo(Courses, {as: 'course_user', foreignKey: 'course_id'});
    Courses.hasMany(UsersCourses, {as: 'user_course', foreignKey: 'course_id'});
   
    Categories.belongsTo(Courses, {as: 'course', foreignKey: 'courseId'});
    Courses.hasMany(Categories, {as: 'categories', foreignKey: 'courseId'});

    Videos.belongsTo(Courses, {as: 'course', foreignKey: 'courseId'});
    Courses.hasMany(Videos, {as: 'videos', foreignKey: 'courseId'});


};

module.exports = initModels;