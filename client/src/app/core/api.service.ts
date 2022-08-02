import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, FilePath, Lecturer } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getLecturersList(): Observable<Array<Lecturer>> {
    return this.http.get<Array<Lecturer>>('http://localhost:3000/lecturers');
  }

  getCoursesList(): Observable<Array<Course>> {
    return this.http.get<Array<Course>>('http://localhost:3000/courses');
  }

  getSortedCourses(
    column: string,
    direction: string
  ): Observable<Array<Course>> {
    return this.http.get<Array<Course>>(
      `http://localhost:3000/courses?column=${column}&sort=${direction}`
    );
  }

  exportCourses(): Observable<FilePath> {
    return this.http.get<FilePath>(`http://localhost:3000/courses-export`);
  }
}
