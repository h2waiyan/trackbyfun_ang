import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  employees: any[];

  courses: string[] = ['python', 'angular', 'flutter'];

  constructor() {
    this.employees = [
      {
        code: '1001', name: 'drashti', gender: 'Female',
        salary: 55500
      },
      {
        code: '1002', name: 'namrata', gender: 'Female',
        salary: 57000
      },
      {
        code: '1003', name: 'shreeja', gender: 'Female',
        salary: 59000
      },
      {
        code: '1004', name: 'shreenil', gender: 'Male',
        salary: 65000
      }
    ];
  }

  ngOnInit(): void {
  }

  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }

  getEmployees(): void {
    this.employees = [
      {
        code: '1001', name: 'drashti', gender: 'Female',
        salary: 55500
      },
      {
        code: '1002', name: 'namrata', gender: 'Female',
        salary: 57000
      },
      {
        code: '1003', name: 'Htoo Wai Yan', gender: 'Female',
        salary: 59000
      },
      {
        code: '1004', name: 'shreenil', gender: 'Male',
        salary: 65000
      },
      {
        code: '1005', name: 'tejas', gender: 'Male',
        salary: 67000
      }
    ];
  }

  trackByCourses(index: number, course: string) {
    return course;
  }

  getNewCourses(): void {
    this.courses = [
      'python', 'angular', 'fulll', 'nodejs'
    ]
  }


}
