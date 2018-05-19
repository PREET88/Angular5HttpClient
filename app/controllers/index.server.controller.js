// Create a new 'render' controller method
// some data for the API
var courses = [
    { "courseCode": "COMP-308", "courseName": "Emerging Technologies" },
    { "courseCode": "COMP-304", "courseName": "Mobile Apps Development" },
    { "courseCode": "COMP-309", "courseName": "Data Mining" }

];
exports.render = function (req, res) {

    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('index', {
        title: 'Hello World'

    });

};
//


// Create a new controller method that retrieves a list of articles
exports.getCourses = function (req, res) {
    // Send a JSON representation of the article
    res.json(courses);

};

exports.createCourse = function (req, res) {

    // This API endpoint keeps the submitted data in memory. 
    // It does not save to a database.
       
    console.log("Course Code: " + req.body.courseCode);
    console.log("Course Name: " + req.body.courseName);

    // build the new course object
    let newCourse = { "courseCode": req.body.courseCode, "courseName": req.body.courseName };

    // "save" the data by adding it to the "courses" array in memory
    courses.push(newCourse);

    // In the real world, you would put code here to save the data to a
    // database or another type of storage.

    // When we're done, it's nice to return the newly created object to the caller.
    res.send(newCourse);

};