import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('slideIn', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      transition(':enter', animate('0.5s ease-out')),
    ]),
  ],
})
export class AboutComponent {
  aboutMeText = `I am a passionate, creative and results-driven Full Stack Software Developer based in Ontario, Canada on a 
  perpetual quest for excellence in the digital realm and recent Electrical & Computer Engineering Master’s graduate from 
  McMaster University. With over 2 years of hands-on experience in the field, I bring a perfect blend of technical expertise 
  and a passion for crafting innovative solutions. I thrive on turning innovative ideas into high-quality, user-friendly 
  applications that make a positive impact. I love transforming ideas into innovative solutions using the latest technologies. 
  With a strong foundation in both front-end and back-end development, I specialize in Angular Material, .NET Entity Core Framework, Flutter and more.`;

  journeyText = `My journey into the world of software development started with a fascination for how lines of code could transform 
  imagination into tangible solutions. Armed with a Master's degree from McMaster University and Bachelor's degree from 
  Visvesvaraya Technological University, I embarked on a mission to blend creativity with functionality.`;

  whatsetsmeapartText = `I believe that coding is an art, and each project is a masterpiece waiting to be created. With a keen eye 
  for detail and a commitment to clean, efficient code, I've honed my skills in Full Stack Web Development and Mobile 
  Development ensuring that every project I undertake is a testament to precision and innovation.`;

  myapproachText = `I approach each new project with enthusiasm and a dedication to pushing the boundaries of what's possible. 
  From concept to deployment, I immerse myself in the entire development lifecycle, ensuring that the end result not only meets 
  but exceeds expectations.`;
}
