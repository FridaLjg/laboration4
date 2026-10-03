import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseService } from './services/course';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('laboration4');

  courses = signal<Course[]>([]);

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courses.set(data);
    });
  }

  //Sortering med kod
  sortByCode() {
    this.courses.update(courses =>
      [...courses].sort((a, b) => a.code.localeCompare(b.code))
    );
  }

  //Sortering med kursnamn
  sortByName() {
    this.courses.update(courses =>
      [...courses].sort((a, b) => a.coursename.localeCompare(b.coursename))
    );
  }

  //Sortering med progression
  sortByProgression() {
    this.courses.update(courses =>
      [...courses].sort((a, b) => a.progression.localeCompare(b.progression))
    );
  }
}
