import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CourseService {
    //dependency injection, creating an instance of HttpClient called http
    constructor(private http: HttpClient){}
    // Uses http.get() to load data from a single API endpoint
    getCourses(): Observable<Response> {
        return this.http.get('api/courses');
    }
    

    // send a POST request to the API to create a new data object
    createCourse(course) {
        let body = JSON.stringify(course);
        console.log(body)
        return this.http.post('/api/courses/', body, httpOptions);
    }
    
}