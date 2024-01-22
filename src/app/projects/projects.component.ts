import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [
    trigger('slideIn', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      transition(':enter', animate('0.5s ease-out')),
    ]),
  ],
})

export class ProjectsComponent {
  
}
