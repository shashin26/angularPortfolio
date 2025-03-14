import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  events = [
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
}
