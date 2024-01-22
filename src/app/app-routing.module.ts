import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { 
    path: 'resume', 
    component: ResumeComponent 
  },
  { 
    path: "",
    component: MainSectionComponent
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'projects', 
    component: ProjectsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
