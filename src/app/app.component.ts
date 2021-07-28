import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'atomangularfirstproject';
  x = 10*100;

  constructor() {
    setTimeout(() => this.title = "ATOMSPACE", 2000)
  }

  sayHello(name: string) {
    return `Hello, ${name}`;
  }
}
