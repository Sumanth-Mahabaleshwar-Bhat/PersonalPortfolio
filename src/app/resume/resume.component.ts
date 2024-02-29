import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

export interface Skills {
  name: string;
}

export interface FrontEndSkills {
  name: string;
}

export interface BackEndSkills {
  name: string;
}

export interface dbSkills {
  name: string;
}

export interface mobDevSkills {
  name: string;
}

export interface automationSkills {
  name: string;
}

export interface otherSkills {
  name: string;
}

export interface softSkills {
  name: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  animations: [
    trigger('slideIn', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      transition(':enter', animate('0.5s ease-out')),
    ]),
  ],
})
export class ResumeComponent {
  constructor(private router: Router) {

  }

  isRouteActive(route:string): boolean {
    return this.router.url === route;
  }
  
  skills: Skills[] = [
    {name: 'Python'},
    {name: 'C#'},
    {name: 'JavaScript'},
    {name: 'C++'},
    {name: 'Java'},
  ];

  frontEndSkills: FrontEndSkills[] = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'Bootstrap'},
    {name: 'TypeScript'},
    {name: 'Angular Material'},
    {name: 'XML'},
    {name: 'JSON'}
  ];

  backEndSkills: BackEndSkills[] = [
    {name: 'ASP.NET Entity Core Framework'},
    {name: 'LINQ'},
    {name: 'RESTful API'},
    {name: 'Ruby on Rails'}
  ];

  dbSkills: dbSkills[] = [
    {name: 'Microsoft SQL Server'},
    {name: 'Firebase'},
    {name: 'PostgreSQL'},
    {name: 'MongoDB'}
  ];

  mobDevSkills: mobDevSkills[] = [
    {name: 'Flutter'},
    {name: 'Dart'},
    {name: 'MIT App Inventor'}
  ];

  automationSkills: automationSkills[] = [
    {name: 'UI Automation Testing'},
    {name: 'Unit Automation Testing'},
    {name: 'Selenium'},
    {name: 'TestCafe framework'}
  ];

  otherSkills: otherSkills[] = [
    {name: 'GitHub'},
    {name: 'Agile Development'},
    {name: 'Software Development Life Cycle (SDLC)'},
    {name: 'CI/CD'},
    {name: 'Database Design'},
    {name: 'Software Architecture'},
    {name: 'UI/UX'},
    {name: 'Object-Oriented Programming'},
    {name: 'Splunk'},
    {name: 'Cloud computing'},
    {name: 'Microservices'},
    {name: 'JIRA'},
    {name: 'Azure DevOps'},
    {name: 'Microsoft Power Automate'},
    {name: 'Visual Studio Code'},
    {name: 'Web Development'},
    {name: 'Technological Versatility'},
    {name: 'Database Optimization'}
  ];

  softSkills: softSkills[] = [
    {name: 'Analytical'},
    {name: 'Initiative'},
    {name: 'Communication Skills'},
    {name: 'Problem-Solving'},
    {name: 'Team Collaboration'},
    {name: 'Adaptability'},
    {name: 'Time Management'},
    {name: 'Attention to Detail'},
    {name: 'Interpersonal Skills'},
    {name: 'Curiosity and Drive'},
    {name: 'Learning Orientation'},
    {name: 'Flexibility'}
  ];

  drop(event: CdkDragDrop<Skills[]>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  }

  panelOpenState = false;
}
