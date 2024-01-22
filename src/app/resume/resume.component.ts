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
    {name: 'Java'},
    {name: 'JavaScript'},
    {name: 'C#'},
    {name: 'C++'},
  ];

  frontEndSkills: FrontEndSkills[] = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'Bootstrap'},
    {name: 'TypeScript'},
    {name: 'Angular Material'},
    {name: 'Angular Forms'},
    {name: 'JSON'}
  ];

  backEndSkills: BackEndSkills[] = [
    {name: '.NET 6.0 Entity Core Framework'},
    {name: 'LINQ'},
    {name: 'RESTful Services'},
    {name: 'Ruby on Rails'}
  ];

  dbSkills: dbSkills[] = [
    {name: 'Microsoft SQL Server'},
    {name: 'Firebase'},
    {name: 'PostgreSQL'}
  ];

  mobDevSkills: mobDevSkills[] = [
    {name: 'Flutter'},
    {name: 'MIT App Inventor'}
  ];

  automationSkills: automationSkills[] = [
    {name: 'Selenium'},
    {name: 'TestCafe framework'}
  ];

  otherSkills: otherSkills[] = [
    {name: 'GitHub'},
    {name: 'Agile Development'},
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
