import { Component } from '@angular/core';

interface EventItem {
  title?: string;
  date?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';

  events: EventItem[];
  skills: any[] = [];
  projects: any[] = [];

  constructor() {
    this.events = [
      { title: 'Ordered', date: '15/10/2020 10:30' },
      { title: 'Processing', date: '15/10/2020 14:00' },
      { title: 'Shipped', date: '15/10/2020 16:15' },
    ];
    this.skills = [
      'angular',
      'javascript',
      'html',
      'css',
      'angular',
      'javascript',
    ];
    this.projects = [
      'angular',
      'javascript',
      'html',
      'css',
      'angular',
      'javascript',
    ];
  }

  onSubmit(form: any) {
    console.log(form);
  }
}
