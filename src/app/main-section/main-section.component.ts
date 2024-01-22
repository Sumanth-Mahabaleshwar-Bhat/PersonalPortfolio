import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private router: Router, private observer: BreakpointObserver) {

  }

  fadeInState = 'void';

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeInState = 'show';
    }, 500);
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if(res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  isRouteActive(route:string): boolean {
    return this.router.url === route;
  }

  onResumeButtonClick() {
    this.router.navigate(['/resume']);
  }
}
