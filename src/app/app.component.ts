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
  time = 0;

  Timer(){
    setTimeout(() => this.time += 1, 10000)
    return this.time;
  }
}
