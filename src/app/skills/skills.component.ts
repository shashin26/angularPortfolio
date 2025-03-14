import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
    skills = [
        { skillName: 'Angular', percentage: 75, description: 'Description 1' },
        { skillName: 'JavaScript', percentage: 80, description: 'Description 1' },
        { skillName: 'HTML', percentage: 50, description: 'Description 1' },
        { skillName: 'CSS', percentage: 50, description: 'Description 1' },
        { skillName: 'Python', percentage: 50, description: 'Description 1' },
      ];
}
