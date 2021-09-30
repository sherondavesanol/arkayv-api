// Models
const Course = require('../../models/Course');

// View Course Function
const adminViewCourse = (id) => {
    
    return Course.findOne({_id: id}).then((err, data) => err ? err : data);
};

module.exports = adminViewCourse;