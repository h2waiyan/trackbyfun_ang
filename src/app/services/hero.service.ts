import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }

  sayHello () {
    alert("Hello");
  }

  
}
