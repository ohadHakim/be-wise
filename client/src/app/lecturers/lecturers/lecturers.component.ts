import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Lecturer } from 'src/app/shared/types';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.scss'],
})
export class LecturersComponent implements OnInit {
  lecturers!: Array<Lecturer>;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getLecturers();
  }
  getLecturers() {
    this.apiService.getLecturersList().subscribe({
      next: (data: Array<Lecturer>) => {
        this.lecturers = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log(`complete`),
    });
  }
}
