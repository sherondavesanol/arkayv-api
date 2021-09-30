// Models
const Course = require('../../models/Course');

// View Courses Function
const adminViewCourses = () => {
    
    return Course.find({isActive: true}).then((err, data) => err ? err : data);
};

module.exports = adminViewCourses;