import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
//
import { CourseService } from './course.service';
//
@Component({
    selector: 'angular5-http-client',
    //template: '<h1>This is Angular 2 Example 1</h1>',
    templateUrl: '/app/app.template.html',
    styleUrls: ['app/app.template.css'],

    //styles: ['h1{color: blue;}'],
    providers: [CourseService]
})
//
export class AppComponent {
    public courses;

    //course: any = {};

    
    //courseName: string;
    //courseCode: string;

    //
    constructor(private courseService: CourseService) { }
    //
    ngOnInit() {
        this.getCourses();        
    }
    //
    getCourses() {
        this.courseService.getCourses().subscribe(
            // the first argument is a function which runs on success
            data => { this.courses = data },
            // the second argument is a function which runs on error
            err => console.log(err),
            // the third argument is a function which runs on completion
            () => console.log('done loading courses')
        );
    }
    //
    
    
    createCourse(courseCode, courseName) {
        let course = {
            courseCode: courseCode,
            courseName: courseName
        };
        this.courseService.createCourse(course).subscribe(
            data => {
                // refresh the list
                this.getCourses();
                return true;
            },
            error => {
                console.error("Error saving food!");
                return Observable.throw(error);
            }
        );
    }
    
    
    
    
}