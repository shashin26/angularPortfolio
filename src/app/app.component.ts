import { Component } from '@angular/core';

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
})
export class AppComponent {
  title = 'portfolio';

  skills: any[] = [];
  projects: any[] = [];

  constructor() {}

  onSubmit(form: any) {
    console.log(form);
  }
}
