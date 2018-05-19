System.register(["@angular/core", "@angular/common/http"], function (exports_1, context_1) {
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
    var core_1, http_1, httpOptions, CourseService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            httpOptions = {
                headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
            };
            CourseService = (function () {
                //dependency injection, creating an instance of HttpClient called http
                function CourseService(http) {
                    this.http = http;
                }
                // Uses http.get() to load data from a single API endpoint
                CourseService.prototype.getCourses = function () {
                    return this.http.get('api/courses');
                };
                // send a POST request to the API to create a new data object
                CourseService.prototype.createCourse = function (course) {
                    var body = JSON.stringify(course);
                    console.log(body);
                    return this.http.post('/api/courses/', body, httpOptions);
                };
                return CourseService;
            }());
            CourseService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.HttpClient])
            ], CourseService);
            exports_1("CourseService", CourseService);
        }
    };
});
//# sourceMappingURL=course.service.js.map