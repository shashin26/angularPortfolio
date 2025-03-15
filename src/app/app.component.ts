import { Component, ViewEncapsulation } from '@angular/core';

interface EventItem {
  degree?: string;
  duration?: string;
  institute?: string;
  description?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'portfolio';
  constructor() {}
}
