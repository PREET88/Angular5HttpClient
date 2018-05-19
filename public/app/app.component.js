System.register(["@angular/core", "rxjs/Observable", "./course.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Observable_1, course_service_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            }
        ],
        execute: function () {
            //
            AppComponent = (function () {
                //course: any = {};
                //courseName: string;
                //courseCode: string;
                //
                function AppComponent(courseService) {
                    this.courseService = courseService;
                }
                //
                AppComponent.prototype.ngOnInit = function () {
                    this.getCourses();
                };
                //
                AppComponent.prototype.getCourses = function () {
                    var _this = this;
                    this.courseService.getCourses().subscribe(
                    // the first argument is a function which runs on success
                    function (data) { _this.courses = data; }, 
                    // the second argument is a function which runs on error
                    function (err) { return console.log(err); }, 
                    // the third argument is a function which runs on completion
                    function () { return console.log('done loading courses'); });
                };
                //
                AppComponent.prototype.createCourse = function (courseCode, courseName) {
                    var _this = this;
                    var course = {
                        courseCode: courseCode,
                        courseName: courseName
                    };
                    this.courseService.createCourse(course).subscribe(function (data) {
                        // refresh the list
                        _this.getCourses();
                        return true;
                    }, function (error) {
                        console.error("Error saving food!");
                        return Observable_1.Observable.throw(error);
                    });
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'angular5-http-client',
                    //template: '<h1>This is Angular 2 Example 1</h1>',
                    templateUrl: '/app/app.template.html',
                    styleUrls: ['app/app.template.css'],
                    //styles: ['h1{color: blue;}'],
                    providers: [course_service_1.CourseService]
                })
                //
                ,
                __metadata("design:paramtypes", [course_service_1.CourseService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map