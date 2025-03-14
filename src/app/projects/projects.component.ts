import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    { projectName: 'Project 1', description: 'Description 1' },
    { projectName: 'Project 2', description: 'Description 2' },
    { projectName: 'Project 3', description: 'Description 3' },
    { projectName: 'Project 4', description: 'Description 4' },
  ];
}
