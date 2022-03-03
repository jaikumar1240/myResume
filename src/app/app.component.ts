import { Component } from '@angular/core';
import { HostListener } from "@angular/core";
import * as AOS from 'aos';

import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
interface Detail{
  institute:string,
  position:string,
  time:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class AppComponent {
  showNavbar: boolean = false;
  ngOnInit() {
    AOS.init();
  } 
  
  title = 'Jai Kumar';
  selectedBtn = 'profile'
  carrers:Detail[] = [{
    institute:"Pristyn Care",
    position:"Front-End Web Developer",
    time:"(Sept 2021 - Currently working)"
  },
  {
    institute:"Pepcoding",
    position:"Java/Web Developer Intern",
    time:"(Feb 2020 - Aug 2020)"
  },
  {
    institute:"Tata Power",
    position:"Intern",
    time:"(June 2019 - Aug 2019)"
  }]
  skills = [{
    skillname: "HTML",
    skillvalue: "100%",
  },
  {
    skillname: "CSS",
    skillvalue: "95%",
  },
  {
    skillname: "JAVASCRIPT",
    skillvalue: "90%",
  },
  {
    skillname: "JAVA",
    skillvalue: "80%",
  },
  {
    skillname: "ANGULAR",
    skillvalue: "75%",
  },
  {
    skillname: "BOOTSTRAP",
    skillvalue: "65%",
  },
  {
    skillname: "REACT",
    skillvalue: "50%",
  },
  {
    skillname: "VUE",
    skillvalue: "30%",
  },
]
  scroll(id:any){
      document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if(window.scrollY>=0.8*window.innerHeight){
      this.showNavbar = true;
    }
    else{
      this.showNavbar =  false;
    }
    if(window.scrollY>=window.innerHeight){
      this.selectedBtn = 'profile';
    }
    if(window.scrollY>=1.8*window.innerHeight){
      this.selectedBtn = 'experience';
    }
    if(window.scrollY>=2.8*window.innerHeight){
      this.selectedBtn = 'skills';
    }
    if(window.scrollY>=3.8*window.innerHeight){
      this.selectedBtn = 'contact';
    }
  }
  
}
  