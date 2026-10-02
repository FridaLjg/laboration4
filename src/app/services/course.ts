import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  private url = 'https://webbutveckling.miun.se/files/ramschema.json';

  constructor(private http: HttpClient) { }

}
