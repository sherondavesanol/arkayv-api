// Models
const Course = require('../../models/Course');

// View Archived Courses Function
const adminViewArchivedCourses = () => {
    
    return Course.find({isActive: false}).then((err, data) => err ? err : data);
};

module.exports = adminViewArchivedCourses;