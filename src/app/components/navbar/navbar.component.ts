import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    // animation triggers go here
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ]),
    ]),
  ]
})
export class NavbarComponent implements OnInit {

  constructor(
    private darkModeService: DarkModeService
  ) { }
  
  ngOnInit(): void {
  }

  get darkMode(){
    return this.darkModeService.darkMode
  }

  scroll(id:any){
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  }

  darkmodeHandler(){
    this.darkModeService.darkMode = !this.darkModeService.darkMode
    console.log(this.darkMode,'hiiii');
    
  }

  showNavbar: boolean = false;
  runningTimeOut: any;
  selectedBtn = 'profile'
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if(this.runningTimeOut){
      clearTimeout(this.runningTimeOut);
    }
    if(window.scrollY>=0.8*window.innerHeight){
      this.showNavbar = true;
      this.runningTimeOut = setTimeout(() => {
        this.showNavbar = false
      }, 5000);
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
