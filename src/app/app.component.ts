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

  events: EventItem[];
  skills: any[] = [];
  projects: any[] = [];

  constructor() {
    this.events = [
      {
        degree: 'B.TECH  /  MECHANICAL',
        duration: 'AUGUST/2017  -  AUGUST/2021',
        institute: 'CMR ENGINEERING COLLEGE',
        description:
          "Completed my Bachelor's degree in Mechanical Engineering. Graduated on August 2021, from CMR Engineering College. Achieved an overall CGPA of 6.91 during my undergraduate studies.",
      },
      {
        degree: 'INTERMEDIATE  /  MPC',
        duration: 'JUNE/2015  -  MARCH/2017',
        institute: 'SRI GAYATRI JUNIOR COLLEGE',
        description:
          'Completed my Intermediate education with a focus on Mathematics, Physics, and Chemistry (MPC).Graduated on March 2017, from Sri Gayatri Junior College. Attained an overall percentage of 81.5% in my Intermediate studies.',
      },
      {
        degree: 'SCC  /  10TH',
        duration: 'JUNE/2014  -  MARCH/2015',
        institute: 'S. S. BHOOPATHY HIGH SCHOOL',
        description:
          'Completed my SSC/10th-grade education. Graduated on October 15, 2020, from S. S. Bhoopathy High School. Achieved an overall CGPA of 8.3 in my 10th-grade examinations.',
      },
    ];
    this.skills = [
      { skillName: 'Angular', percentage: 75, description: 'Description 1' },
      { skillName: 'JavaScript', percentage: 80, description: 'Description 1' },
      { skillName: 'HTML', percentage: 50, description: 'Description 1' },
      { skillName: 'CSS', percentage: 50, description: 'Description 1' },
      { skillName: 'Python', percentage: 50, description: 'Description 1' },
    ];
    this.projects = [
      { projectName: 'Project 1', description: 'Description 1' },
      { projectName: 'Project 2', description: 'Description 2' },
      { projectName: 'Project 3', description: 'Description 3' },
      { projectName: 'Project 4', description: 'Description 4' },
    ];
  }

  onSubmit(form: any) {
    console.log(form);
  }
}
