import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css',
  animations: [
    trigger(
      'fadeIn', [
        state('show', style({ opacity: 1 })),
        state('void', style({ opacity: 0 })), 
        transition('void => show', animate('1000ms ease-in-out')),
      ]
    ),
  ],
})

export class MainSectionComponent implements OnInit {
  constructor(private router: Router) {

  }

  fadeInState = 'void';

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeInState = 'show';
    }, 500);
  }

  isRouteActive(route:string): boolean {
    return this.router.url === route;
  }

  onResumeButtonClick() {
    this.router.navigate(['/resume']);
  }
}
