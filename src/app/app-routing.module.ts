import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //endless loop
  //localhost:4200/
  {
    path : '',
    redirectTo : 'home',
    pathMatch: 'prefix' //prefix
  },
  // localhost:4200/courses
  {
    path: 'courses',
    component: CoursesComponent
  },
  // localhost:4200/home
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**', // wildcard
    redirectTo: 'home' // component: 404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }