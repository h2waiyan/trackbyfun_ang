import { Component, OnInit } from '@angular/core';
import { SigninserviceService } from '../signinservice.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  employees: any[];

  msinewcourses?: string[];

  courses: string[] = ['python', 'angular', 'flutter'];

  constructor(private signinService: SigninserviceService) {
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
    this.msinewcourses = this.signinService.msicourses;
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
        code: '1008', name: 'Htoo Wai Yan', gender: 'Female',
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

    this.msinewcourses?.push("python");
  }

  updateServiceCourses() {
    this.signinService.updateCourses(this.msinewcourses!);
  }

  getpdatedServiceCourses() {
    console.log(this.signinService.msicourses);
  }
}
