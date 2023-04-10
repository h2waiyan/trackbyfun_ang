import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private heroService : HeroService,
    
  ) { }

  // initialized


  //lifecycle hook methods
  ngOnInit(): void {
    // this.heroService.sayHello();
    console.log("Hello Angular")
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(): void {
  }

}
