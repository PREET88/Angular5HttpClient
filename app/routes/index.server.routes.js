const index = require('../controllers/index.server.controller');

module.exports = function (app) {
    app.get('/api/courses', index.getCourses);
    app.get('/', index.render);
    app.post('/api/courses', index.createCourse);

};
