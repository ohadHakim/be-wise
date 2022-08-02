import { Component, OnInit } from '@angular/core';
import { Course, CourseSort, FilePath, sortColumn } from '../shared/types';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses!: Array<Course>;
  tableSort!: CourseSort;
  isCollapsed = false;
  date = new Date();
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCourses();
    this.tableSort = {
      column: 'name',
      dirAsc: true,
    };
  }
  getCourses() {
    this.apiService.getCoursesList().subscribe({
      next: (data: Array<Course>) => {
        this.courses = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log(`complete`),
    });
  }

  sortCourses(column: sortColumn) {
    if (this.tableSort.column === column) {
      this.tableSort.dirAsc = !this.tableSort.dirAsc;
    } else {
      this.tableSort.column = column;
      this.tableSort.dirAsc = true;
    }
    const direction = this.tableSort.dirAsc ? 'ASC' : 'DESC';
    this.apiService.getSortedCourses(column, direction).subscribe({
      next: (data: Array<Course>) => {
        this.courses = data;
      },
      error: (err) => console.log(err),
    });
  }
  displaySort(column: sortColumn): string {
    if (this.tableSort.column === column) {
      return this.tableSort.dirAsc ? 'bi bi-chevron-up' : 'bi bi-chevron-down';
    }
    return 'bi bi-chevron-expand';
  }

  exportCoursesData() {
    this.apiService.exportCourses().subscribe({
      next: (data: FilePath) => {
        window.open(`http://localhost:3000/courses-export`);
      },
      error: (err) => console.error(err),
    });
  }
}
