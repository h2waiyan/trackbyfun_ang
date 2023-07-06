import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninserviceService {

  constructor() { }

  msicourses = ['angular', 'flutter', 'nodejs'];

  updateCourses(updatedArray: string[]) {
    this.msicourses = updatedArray;
  }
}
