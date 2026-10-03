import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  private url = 'https://webbutveckling.miun.se/files/ramschema.json';

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<Course[]>(this.url);
  }

}
