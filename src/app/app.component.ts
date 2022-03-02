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
  